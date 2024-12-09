import { db } from "@/db/db";
import { InsertBlogType, blogs, users } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";
import { v4 } from "uuid";
async function uploadImageToSupabase(file: File, id: string): Promise<string> {
  const supabase = createClient();
  const fileBuffer = await file.arrayBuffer();

  await (await supabase).storage.from("cover").remove([id]);
  const uuid = v4();
  const { data, error } = await (await supabase).storage
    .from("cover")
    .upload(`${uuid}`, fileBuffer, {
      contentType: file.type,
      upsert: true,
    });
  if (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }

  // Return the public URL of the uploaded image
  const imageUrl = (await supabase).storage
    .from("cover")
    .getPublicUrl(data.path).data.publicUrl;
  return imageUrl;
}

// Function to check if the user is an admin or the owner of the blog
async function isAdminOrOwner(
  userId: string,
  blogId: string
): Promise<boolean> {
  const supabase = createClient();

  // Check if the user is an admin
  const { data: user, error } = await (await supabase).auth.getUser();

  if (error || !user) {
    throw new Error("User not found or error fetching user role");
  }

  // Check if the user is an admin or the owner of the blog
  if (user.user.app_metadata.role === "admin") {
    return true;
  }

  // Check if the user is the owner of the blog
  const blog = await db
    .select()
    .from(blogs)
    .where(eq(blogs.id, blogId))
    .limit(0);
  if (blog && blog[0].author_id === userId) {
    return true;
  }

  return false;
}

// API Route handler for PUT request to update blog
export async function PUT(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();
    const client = (await (await createClient()).auth.getUser()).data.user;
    const userId = client?.id;

    if (!userId) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
      });
    }

    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const category = formData.get("category")?.toString() || "Tech";
    const blogId = formData.get("blogId")?.toString() || "";

    if (!blogId) {
      return new Response(JSON.stringify({ error: "Blog ID is required" }), {
        status: 400,
      });
    }

    const isAuthorized = await isAdminOrOwner(userId, blogId);
    if (!isAuthorized) {
      return new Response(
        JSON.stringify({
          error:
            "Unauthorized: You must be an admin or the owner of the blog to update it",
        }),
        { status: 403 }
      );
    }

    const image = formData.get("image") as File | null;
    let imageUrl: string | null = null;

    if (image) {
      imageUrl = await uploadImageToSupabase(image, blogId);
    }

    const data: Partial<InsertBlogType> = {
      title,
      content,
      category,
      image: imageUrl || undefined,
    };

    const result = await db.update(blogs).set(data).where(eq(blogs.id, blogId));

    if (result) {
      return new Response(
        JSON.stringify({ message: "Blog updated successfully", result }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Blog not found or update failed" }),
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

import { db } from "@/db/db";
import { InsertBlogType, blogs, users } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { v4 as uuidv4 } from "uuid";

async function uploadImageToSupabase(file: File, id: string): Promise<string> {
  const supabase = createClient();
  const fileBuffer = await file.arrayBuffer();

  // Upload to Supabase Storage
  const { data, error } = await (await supabase).storage
    .from("cover")
    .upload(`${id}`, fileBuffer, {
      contentType: file.type,
    });
  if (error) {
    throw new Error(`Image upload failed: ${error.message}`);
  }

  // Return the public URL of the uploaded image
  const imageUrl = (await supabase).storage.from("cover").getPublicUrl(data.path).data.publicUrl;
  return imageUrl;
}

// API Route handler for POST request
export async function POST(req: Request): Promise<Response> {
  try {
    const formData = await req.formData();
    const client = (await (await createClient()).auth.getUser()).data.user
    const id = client?.id;

    const title = formData.get("title")?.toString() || "";
    const content = formData.get("content")?.toString() || "";
    const category = formData.get("category")?.toString() || "Tech";
    const authorId = id || "";
    const bid = uuidv4();

    const image = formData.get("image") as File | null;

    if (image) {
      const imageUrl = await uploadImageToSupabase(image, bid!);

      const data: InsertBlogType = {
        id: bid,
        title,
        content,
        category,
        authorId,
        image: imageUrl,
      };

      const result = await db.insert(blogs).values(data);

      return new Response(
        JSON.stringify({ message: "Blog created successfully", result }),
        { status: 201 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "No image uploaded" }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500 }
    );
  }
}

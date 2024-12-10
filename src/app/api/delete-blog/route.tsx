import { db } from "@/db/db";
import { blogs } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";

// Function to check if the user is an admin or the owner of the blog
async function isAdminOrOwner(userId: string, blogId: string): Promise<boolean> {
  const supabase = createClient();

  // Get user data
  const { data: user, error } = await (await supabase).auth.getUser();

  if (error || !user) {
    throw new Error("User not found or error fetching user role");
  }

  // Check if the user is an admin
  if (user.user.app_metadata.role === "admin") {
    return true;
  }

  // Check if the user is the owner of the blog
  const blog = await db
    .select()
    .from(blogs)
    .where(eq(blogs.id, blogId))
    .limit(1);

  if (blog && blog[0]?.author_id === userId) {
    return true;
  }

  return false;
}

// API Route handler for DELETE request to delete blog
export async function DELETE(req: Request): Promise<Response> {
  try {
    const url = new URL(req.url);
    const blogId = url.searchParams.get("id");
    const supabase = createClient();

    // Ensure blogId is provided
    if (!blogId) {
      return new Response(
        JSON.stringify({ error: "Blog ID is required" }),
        { status: 400 }
      );
    }

    // Get the current authenticated user
    const { data: client, error: authError } = await (await supabase).auth.getUser();
    if (authError || !client?.user) {
      return new Response(
        JSON.stringify({ error: "User not authenticated" }),
        { status: 401 }
      );
    }

    const userId = client.user.id;

    // Check authorization
    const isAuthorized = await isAdminOrOwner(userId, blogId);
    if (!isAuthorized) {
      return new Response(
        JSON.stringify({
          error:
            "Unauthorized: You must be an admin or the owner of the blog to delete it",
        }),
        { status: 403 }
      );
    }

    // Delete the blog from the database
    const result = await db.delete(blogs).where(eq(blogs.id, blogId));

    if (result) {
      return new Response(
        JSON.stringify({ message: "Blog deleted successfully", result }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Blog not found or delete failed" }),
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

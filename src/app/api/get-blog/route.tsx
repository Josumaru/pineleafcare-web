import { db } from "@/db/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
  }

  try {
    const blogData = await db
      .select({
        id: blogs.id,
        title: blogs.title,
        content: blogs.content,
        image: blogs.image,
        category: blogs.category,
      })
      .from(blogs)
      .where(eq(blogs.id, id))
      .limit(1);

    if (!blogData.length) {
      return new Response(JSON.stringify({ error: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(blogData[0]), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500 }
    );
  }
}

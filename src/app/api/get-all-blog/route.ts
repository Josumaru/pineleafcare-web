import { db } from "@/db/db";
import { blogs, users } from "@/db/schema";
import { desc, eq } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(req: Request): Promise<Response> {
  try {
    const blogData = await db
      .select({
        id: blogs.id,
        title: blogs.title,
        content: blogs.content,
        image: blogs.image,
        userId: blogs.authorId,
        createdAt: blogs.createdAt,
        updatedAt: blogs.updatedAt,
        category: blogs.category,
        author: {
          name: users.name,
          image: users.image,
        },
      })
      .from(blogs)
      .leftJoin(users, eq(blogs.authorId, users.id))
      .orderBy(desc(blogs.createdAt));
    return new Response(JSON.stringify(blogData), { status: 200,
       headers: {
        "Cache-Control": "no-store",  // Ensure cache is not stored
      },
     });
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}

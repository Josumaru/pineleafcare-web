import { db } from "@/db/db";
import { blogs, users } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return new Response(JSON.stringify({ error: "ID pengguna tidak disediakan" }), { status: 400 });
  }

  try {
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);

    if (user.length === 0) {
      return new Response(JSON.stringify({ error: "Pengguna tidak ditemukan" }), { status: 404 });
    }

    const postCountResult = await db
      .select({
        count: sql`COUNT(*)`.as<number>(),
      })
      .from(blogs)
      .where(eq(blogs.author_id, id));

    const postCount = postCountResult[0]?.count ?? 0;

    // Kirim respon
    return new Response(
      JSON.stringify({
        id: user[0].id,
        name: user[0].name,
        image: user[0].image,
        banner: user[0].banner,
        verified: user[0].verified,
        postCount,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Terjadi kesalahan pada server" }), { status: 500 });
  }
}

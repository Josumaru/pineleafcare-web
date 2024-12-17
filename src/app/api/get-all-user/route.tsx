import { db } from "@/db/db";
import { blogs, users } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isUserAdmin(userId: string): Promise<boolean> {
  const supabase = createClient();

  const role = (await (await supabase).auth.getUser()).data.user?.app_metadata
    .role;
  return role === "admin"; // Pastikan role adalah admin
}

// API Route handler untuk GET request
export async function GET(req: Request): Promise<Response> {
  try {
    // Mendapatkan ID pengguna yang sedang terautentikasi
    const client = (await (await createClient()).auth.getUser()).data.user;
    const userId = client?.id;

    if (!userId) {
      return new Response(JSON.stringify({ error: "User not authenticated" }), {
        status: 401,
      });
    }

    // Memeriksa apakah pengguna adalah admin
    const isAdmin = await isUserAdmin(userId);
    if (!isAdmin) {
      return new Response(
        JSON.stringify({
          error: "You do not have permission to access this resource",
        }),
        { status: 403 }
      );
    }

    // Jika pengguna adalah admin, ambil semua data pengguna beserta jumlah post-nya
    const usersData = await db
      .select({
        id: users.id,
        name: users.name,
        image: users.image,
        banner: users.banner,
        verified: users.verified,
        postCount: sql`(SELECT COUNT(*) FROM ${blogs} WHERE ${blogs.author_id} = ${users.id})`.as<number>(),
      })
      .from(users);

    return new Response(JSON.stringify({ users: usersData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
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

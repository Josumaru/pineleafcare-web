import { db } from "@/db/db";
import { users } from "@/db/schema";
import { createClient } from "@/utils/supabase/server";
import { eq } from "drizzle-orm";

export async function POST(req: Request): Promise<Response> {
  try {
    const { name } = await req.json();
    const client = (await (await createClient()).auth.getUser()).data.user;

    if (!client) {
      return new Response(JSON.stringify({ error: "Tidak Terauthentikasi" }), {
        status: 401,
      });
    }

    const userId = client.id;

    if (!name || typeof name !== "string") {
      return new Response(JSON.stringify({ error: "Nama Tidak Valid" }), {
        status: 400,
      });
    }

    await db.update(users).set({ name }).where(eq(users.id, userId));

    return new Response(
      JSON.stringify({ message: "Nama berhasil diperbarui" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Error tidak diketahui",
      }),
      { status: 500 }
    );
  }
}

import { db } from "@/db/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createClient } from "@/utils/supabase/server";

// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isAdmin(userId: string): Promise<boolean> {
  const supabase = createClient();

  const role = (await (await supabase).auth.getUser()).data.user?.app_metadata
    ?.role;
  return role === "admin";
}

// API Route handler untuk memverifikasi pengguna
export async function PUT(req: Request): Promise<Response> {
  try {
    // Mendapatkan data pengguna yang sedang login
    const supabase = createClient();
    const client = (await (await supabase).auth.getUser()).data.user;

    if (!client) {
      return new Response(
        JSON.stringify({ error: "User not authenticated" }),
        { status: 401 }
      );
    }

    // Memeriksa apakah pengguna adalah admin
    const isUserAdmin = await isAdmin(client.id);
    if (!isUserAdmin) {
      return new Response(
        JSON.stringify({ error: "Permission denied: Only admins can perform this action" }),
        { status: 403 }
      );
    }

    // Parse data dari body request
    const body = await req.json();
    const { userId, isVerified } = body;

    // Validasi input
    if (!userId || typeof isVerified !== "boolean") {
      return new Response(
        JSON.stringify({ error: "Invalid request body" }),
        { status: 400 }
      );
    }

    // Perbarui status verified di database
    const result = await db
      .update(users)
      .set({ verified: isVerified })
      .where(eq(users.id, userId));


    // Respon sukses
    return new Response(
      JSON.stringify({ message: "User verification updated successfully" }),
      { status: 200 }
    );
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

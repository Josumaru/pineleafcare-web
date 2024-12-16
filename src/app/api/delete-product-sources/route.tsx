import { createClient } from "@/utils/supabase/server";

// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isUserAdmin(): Promise<boolean> {
  const supabase = createClient();

  const role = (await (await supabase).auth.getUser()).data.user?.app_metadata
    .role;
  return role === "admin"; // Pastikan role adalah admin
}

// Fungsi untuk menghapus file dari bucket
async function deleteFileFromBucket(filePath: string) {
  const supabase = createClient()

  const { data, error } = await (await supabase).storage
    .from("product")
    .remove([filePath]);

  if (error) {
    console.error("Error deleting file:", error);
    return null;
  }

  return data;
}

// API Route handler untuk DELETE request
export async function DELETE(req: Request): Promise<Response> {
  try {
    // Memeriksa apakah pengguna adalah admin
    const isAdmin = await isUserAdmin();
    if (!isAdmin) {
      return new Response(
        JSON.stringify({
          error: "You do not have permission to access this resource",
        }),
        { status: 403 }
      );
    }

    // Mengambil data filePath dari body request
    const formData = await req.formData();
    const filePath = formData.get("filePath") as string;
    console.log('====================================');
    console.log(filePath);
    console.log('====================================');


    if (!filePath) {
      return new Response(
        JSON.stringify({
          error: "Missing required field: filePath",
        }),
        { status: 400 }
      );
    }

    const result = await deleteFileFromBucket(filePath);

    if (!result) {
      return new Response(
        JSON.stringify({
          error: "Failed to delete file",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "File deleted successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
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
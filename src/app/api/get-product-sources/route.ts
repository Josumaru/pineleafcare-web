import { createClient } from "@/utils/supabase/server";

async function getBucketFiles(bucketName: string) {
  const { data, error } = await (await createClient()).storage
  .from(bucketName)
  .list('', {
    limit: 100, // Batas jumlah file yang akan diambil
    offset: 0,  // Mulai dari file ke-0
  });

  if (error) {
    return [];
  }

  return data;
}


// API Route handler untuk GET request
export async function GET(req: Request): Promise<Response> {
  try {
    // Mendapatkan ID pengguna yang sedang terautentikasi
    const pages = await getBucketFiles("product");

    return new Response(JSON.stringify({ page: pages }), {
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

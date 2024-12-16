import { createClient } from "@/utils/supabase/server";

// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isUserAdmin(): Promise<boolean> {
  const supabase = createClient();

  const role = (await (await supabase).auth.getUser()).data.user?.app_metadata
    .role;
  return role === "admin"; // Pastikan role adalah admin
}

// Fungsi untuk menambahkan file ke bucket
async function addFileToBucket(
  fileContent: Buffer | Blob | string,
  fileName: string
) {
  let currentPage = 0;
  let realPage;
  const allPages = (
    await (await createClient()).storage
      .from("product")
      .list("", { limit: 1000, offset: 0 })
  ).data;
  allPages?.map((page) => {
    const pageName = page.name;
    if (pageName != "page_" + page + ".html") {
      realPage = page;
    }
    currentPage++;
  });
  const { data, error } = await (await createClient()).storage
    .from("product")
    .upload(fileName, fileContent, {
      upsert: true, // Jika file sudah ada, akan menimpa file yang lama
    });

  if (error) {
    console.error("Error uploading file:", error);
    return null;
  }

  return data;
}

// Fungsi untuk memperbarui file di bucket
async function updateFileInBucket(
  filePath: string,
  fileContent: Buffer | Blob | string
) {
  const { data, error } = await (await createClient()).storage
    .from("product")
    .update(filePath, fileContent, {
      upsert: true, // Jika file sudah ada, akan menimpa file yang lama
    });

  if (error) {
    console.error("Error updating file:", error);
    return null;
  }

  return data;
}

// API Route handler untuk POST request
export async function POST(req: Request): Promise<Response> {
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

    // Mengambil data file dari body request
    const formData = await req.formData();

    const fileContent = formData.get("fileContent") as File;
    const fileName = formData.get("fileName") as string;

    if (!fileContent) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: filePath or fileContent",
        }),
        { status: 400 }
      );
    }

    const result = await updateFileInBucket( fileName, fileContent);

    if (!result) {
      return new Response(
        JSON.stringify({
          error: "Failed to upload file",
        }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ message: "File uploaded successfully", data: result }),
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

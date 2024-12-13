import { createClient } from "@/utils/supabase/server";
import { v4 } from "uuid";
// Fungsi untuk memeriksa apakah pengguna adalah admin
async function isUserAdmin(): Promise<boolean> {
  const supabase = createClient();

  const role = (await (await supabase).auth.getUser()).data.user?.app_metadata
    .role;
  return role === "admin"; // Pastikan role adalah admin
}

// Fungsi untuk menambahkan file ke bucket
async function addFileToBucket(
  fileContent: Buffer | Blob | string
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
    if (pageName != "page_" + currentPage + ".html") {
      realPage = "page_" + currentPage + ".html";
    }
    currentPage++;
  });
  const { data, error } = await (await createClient()).storage
    .from("product")
    .upload(realPage ?? "", fileContent, {
      upsert: true, // Jika file sudah ada, akan menimpa file yang lama
    });

  if (error) {
    console.error("Error uploading file:", error);
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


    if (!fileContent) {
      return new Response(
        JSON.stringify({
          error:
            "Missing required fields: bucketName, filePath, or fileContent",
        }),
        { status: 400 }
      );
    }

    const result = await addFileToBucket(fileContent);

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

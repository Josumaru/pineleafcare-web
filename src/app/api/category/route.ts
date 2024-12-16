// Import dependensi yang diperlukan
import { v4 } from "uuid";
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { db } from "@/db/db";
import { categories } from "@/db/schema";

async function isUserAdmin(): Promise<boolean> {
  const supabase = createClient();

  const { data, error } = await (await supabase).auth.getUser();
  if (error || !data.user) {
    return false;
  }

  const role = data.user.app_metadata?.role;
  return role === "admin";
}
// const isAdmin = await isUserAdmin();

// if (!isAdmin) { 
//     return NextResponse.json({
//       success: false,
//       message: "You don't have permission to perform this action.",
//     },
//     {
//       status: 403,
//     }
//   );
// }

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const { data, error } = await (await supabase)
      .from("categories")
      .select("*");
    if (error) {
      throw new Error();
    }
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const formData = req.formData();
    const id = v4();
    const category = (await formData).get("name") as string;
    if (!category || category == "") {
      return NextResponse.json(
        { error: true, message: "Category is required" },
        { status: 400 }
      );
    }
    const data = await db.insert(categories).values({id: id, name: category})
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Error" },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const formData = req.formData();
    const id = (await formData).get("id");
    const category = (await formData).get("category");
    if (!id || !category) {
      return NextResponse.json(
        { error: true, message: "ID and category are required" },
        { status: 400 }
      );
    }
    const data = await (await supabase)
      .from("categories")
      .update({ category })
      .eq("id", id);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const supabase = createClient();
    const formData = req.formData();
    const id = (await formData).get("id") as string;
    if (!id) {
      return NextResponse.json(
        { error: true, message: "ID is required" },
        { status: 400 }
      );
    }
    const data = await (await supabase)
      .from("categories")
      .delete()
      .eq("id", id);
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, message: "Error" },
      { status: 500 }
    );
  }
}

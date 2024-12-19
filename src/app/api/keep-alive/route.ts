import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = createClient();
  console.log("Keep-alive triggered at: ", new Date().toISOString());
  try {
    const { error } = await (await supabase).from("keep_alive").insert({});
    if (error) throw error;

    return NextResponse.json({ message: "Keep-alive recorded successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

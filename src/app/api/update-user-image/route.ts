import { createClient } from "@/utils/supabase/server";
export async function POST(req: Request) {
  const supabase = createClient();
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const bucket = formData.get("bucket") as string | null;

  if (!file) {
    return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
  }

  const user = (await (await supabase).auth.getUser()).data.user;

  if (!user) {
    return new Response(JSON.stringify({ error: "User not authenticated" }), { status: 401 });
  }

  const fileBuffer = await file.arrayBuffer();
  const date = new Date().getTime();
  const { data, error } = await (await supabase).storage
    .from(bucket ?? "")
    .upload(`${user.id}/${date}`, fileBuffer, {
      contentType: file.type,
      upsert: true,
      metadata: { owner: user.id }
    });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
  

  if(bucket == "banner") {
    const currentBanner = (await supabase).from("users").select("banner").eq("id", user.id).single()
    const path = (await currentBanner).data?.banner

    if(path){
      await (await supabase).storage.from("banner").remove([path.split(`banner/`).pop()])
    }

    const image = (await supabase).storage.from("banner").getPublicUrl(data.path).data.publicUrl;
    await (await supabase).from("users").update({ banner: image }).eq("id", user.id);
  
    return new Response(JSON.stringify({ banner: image }), { status: 200 });
  } else if(bucket == "profile"){
    const currentProfile = (await supabase).from("users").select("image").eq("id", user.id).single()
    const path = (await currentProfile).data?.image

    if(path){
      await (await supabase).storage.from("profile").remove([path.split(`profile/`).pop()])
    }

    const image = (await supabase).storage.from("profile").getPublicUrl(data.path).data.publicUrl;
    await (await supabase).from("users").update({ image: image }).eq("id", user.id);;
  
    return new Response(JSON.stringify({ image: image }), { status: 200 });
  } else {

    const image = (await supabase).storage.from(bucket ?? "").getPublicUrl(data.path).data.publicUrl;
  
    return new Response(JSON.stringify({ image: image }), { status: 200 });
  }

}

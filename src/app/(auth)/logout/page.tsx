import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const LogoutPage = async () => {
  const client = createClient();

  await (await client).auth.signOut();
  redirect("/login")  
};

export default LogoutPage;

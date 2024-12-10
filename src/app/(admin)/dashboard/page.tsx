import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

const Page = async ({}) => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  redirect("/dashboard/blog");
};

export default Page;

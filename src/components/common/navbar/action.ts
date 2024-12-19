import { db } from "@/db/db";
import { blogs, users } from "@/db/schema";
import { User } from "@/types/user";
import { createClient } from "@/utils/supabase/server";
import { eq, sql } from "drizzle-orm";

export const getUser = async (): Promise<User | null> => {
  const client = createClient();
  try {
    const { data, error } = await (await client).auth.getUser();

    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, data.user?.id ?? ""))
      .limit(1);
    if (error) {
      return null;
    }

    const postCountResult = await db
      .select({ count: sql<number>`COUNT(*)` })
      .from(blogs)
      .where(eq(blogs.authorId, data.user.id));

    const postCount = postCountResult[0]?.count ?? 0;

    return {
      email: data.user.email ?? "",
      id: data.user.id ?? "",
      image: user[0].image ?? "",
      name: user[0].name ?? "",
      role: data.user.app_metadata.role ?? "user",
      banner: user[0].banner ?? "",
      verified: user[0].verified ?? false,
      postCount,
    };
  } catch (error) {
    return null;
  }
};

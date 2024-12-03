import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const blogs = table("blogs", {
  id: t.uuid().primaryKey(),
  title: t.varchar({ length: 256 }).notNull(),
  content: t.text().notNull(),
  image: t.varchar({ length: 512 }),
  date: t.timestamp().defaultNow().notNull(),
  category: t.varchar().notNull(),
  author_id: t.uuid().notNull(),
});

export const users = table("users", {
  id: t.uuid().primaryKey(),
  name: t.varchar({ length: 256 }).notNull(),
  admin: t.boolean().default(false),
  image: t.varchar({ length: 512 }),

})

export type InsertBlogType = typeof blogs.$inferInsert
export type SelectBlogType = typeof blogs.$inferSelect
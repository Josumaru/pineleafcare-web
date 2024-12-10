import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const blogs = table("blogs", {
  id: t.uuid().primaryKey(),
  title: t.varchar({ length: 256 }).notNull(),
  content: t.text().notNull(),
  image: t.varchar({ length: 512 }),
  createdAt: t.timestamp().defaultNow().notNull(),
  updatedAt: t.timestamp().defaultNow().notNull(),
  category: t.varchar().notNull(),
  author_id: t.uuid().notNull(),
}).enableRLS();

export const users = table("users", {
  id: t.uuid().primaryKey(),
  name: t.varchar({ length: 256 }).notNull(),
  image: t.varchar({ length: 512 }),
  banner: t.varchar({ length: 512 }),
  verified: t.boolean().default(false),
}).enableRLS();

export type InsertBlogType = typeof blogs.$inferInsert;
export type SelectBlogType = typeof blogs.$inferSelect;

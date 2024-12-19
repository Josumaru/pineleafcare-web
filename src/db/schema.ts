import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const products = table("products", {
  id: t.uuid().primaryKey(),
  page: t.numeric().notNull(),
  url: t.varchar({ length: 512 }),
});

export const markers = table("markers", {
  id: t.uuid().primaryKey(),
  lat: t.numeric().notNull(),
  lng: t.numeric().notNull(),
  title: t.varchar({ length: 512 }),
  desc: t.varchar({ length: 512 }),
  loc: t.varchar({ length: 512 }).notNull(),
  province: t.varchar({ length: 512 }),
  city: t.varchar({ length: 512 }),
});

export const categories = table("categories", {
  id: t.uuid().primaryKey(),
  name: t.varchar({ length: 128 }).notNull(),
});

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

export const keepAlive = table("keep_alive", {
  id: t.uuid().primaryKey(),
  createdAt: t.timestamp().defaultNow(),
});


export const users = table("users", {
  id: t.uuid().primaryKey(),
  name: t.varchar({ length: 256 }).notNull(),
  image: t.varchar({ length: 512 }),
  banner: t.varchar({ length: 512 }),
  verified: t.boolean().default(false),
}).enableRLS();

export type InsertBlogType = typeof blogs.$inferInsert;
export type SelectBlogType = typeof blogs.$inferSelect;

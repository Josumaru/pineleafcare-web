import {
  pgTable,
  pgPolicy,
  uuid,
  varchar,
  boolean,
  numeric,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const users = pgTable(
  "users",
  {
    id: uuid().primaryKey().notNull(),
    name: varchar({ length: 256 }).notNull(),
    image: varchar({ length: 512 }),
    banner: varchar({ length: 512 }),
    verified: boolean().default(false),
  },
  (table) => {
    return {
      enableReadAccessForAllUsers: pgPolicy(
        "Enable read access for all users",
        { as: "permissive", for: "select", to: ["public"], using: sql`true` }
      ),
      enableInsertForAuthenticatedUsersOnly: pgPolicy(
        "Enable insert for authenticated users only",
        { as: "permissive", for: "insert", to: ["authenticated"] }
      ),
      enableDeleteForUsersBasedOnUserId: pgPolicy(
        "Enable delete for users based on user_id",
        { as: "permissive", for: "update", to: ["public"] }
      ),
    };
  }
);

export const categories = pgTable(
  "categories",
  {
    id: uuid().primaryKey().notNull(),
    name: varchar({ length: 128 }).notNull(),
  },
  (table) => {
    return {
      enableInsertForAuthenticatedUsersOnly: pgPolicy(
        "Enable insert for authenticated users only",
        {
          as: "permissive",
          for: "insert",
          to: ["authenticated"],
          withCheck: sql`true`,
        }
      ),
      enableDeleteForAuthenticatedUsersOnly: pgPolicy(
        "Enable delete for authenticated users only",
        { as: "permissive", for: "delete", to: ["authenticated"] }
      ),
      enableReadAccessForAllUsers: pgPolicy(
        "Enable read access for all users",
        { as: "permissive", for: "select", to: ["public"] }
      ),
    };
  }
);

export const products = pgTable(
  "products",
  {
    id: uuid().primaryKey().notNull(),
    page: numeric().notNull(),
    url: varchar({ length: 512 }),
  },
  (table) => {
    return {
      public: pgPolicy("public", {
        as: "permissive",
        for: "select",
        to: ["public"],
        using: sql`true`,
      }),
      enableInsertForAuthenticatedUsersOnly: pgPolicy(
        "Enable insert for authenticated users only",
        { as: "permissive", for: "insert", to: ["authenticated"] }
      ),
      enableDelForAuthenticatedUsersOnly: pgPolicy(
        "Enable del for authenticated users only",
        { as: "permissive", for: "delete", to: ["authenticated"] }
      ),
      enableReadAccessForAllUsers: pgPolicy(
        "Enable read access for all users",
        { as: "permissive", for: "update", to: ["public"] }
      ),
    };
  }
);

export const markers = pgTable(
  "markers",
  {
    id: uuid().primaryKey().notNull(),
    lat: numeric().notNull(),
    lng: numeric().notNull(),
    title: varchar({ length: 512 }),
    desc: varchar({ length: 512 }),
    loc: varchar({ length: 512 }).notNull(),
    province: varchar({ length: 512 }),
    city: varchar({ length: 512 }),
  },
  (table) => {
    return {
      readAccess: pgPolicy("read access", {
        as: "permissive",
        for: "select",
        to: ["public"],
        using: sql`true`,
      }),
      enableInsertForAuthenticatedUsersOnly: pgPolicy(
        "Enable insert for authenticated users only",
        { as: "permissive", for: "insert", to: ["authenticated"] }
      ),
      enableDeleteForAuthenticatedUsersOnly: pgPolicy(
        "Enable delete for authenticated users only",
        { as: "permissive", for: "delete", to: ["authenticated"] }
      ),
      enableUpdateForAuthenticatedUsersOnly: pgPolicy(
        "Enable update for authenticated users only",
        { as: "permissive", for: "update", to: ["authenticated"] }
      ),
    };
  }
);

export const blogs = pgTable(
  "blogs",
  {
    id: uuid().primaryKey().notNull(),
    title: varchar({ length: 256 }).notNull(),
    content: text().notNull(),
    image: varchar({ length: 512 }),
    createdAt: timestamp({ mode: "string" }).defaultNow().notNull(),
    updatedAt: timestamp({ mode: "string" }).defaultNow().notNull(),
    category: varchar().notNull(),
    authorId: uuid("author_id").notNull(),
  },
  (table) => {
    return {
      enableDeleteForUsersBasedOnUserId: pgPolicy(
        "Enable delete for users based on user_id",
        {
          as: "permissive",
          for: "delete",
          to: ["public"],
          using: sql`(( SELECT auth.uid() AS uid) = id)`,
        }
      ),
      enableReadAccessForAllUsers: pgPolicy(
        "Enable read access for all users",
        { as: "permissive", for: "select", to: ["public"] }
      ),
      enableInsertForAuthenticatedUsersOnly: pgPolicy(
        "Enable insert for authenticated users only",
        { as: "permissive", for: "insert", to: ["authenticated"] }
      ),
      enableUpdateForUsersBasedOnEmail: pgPolicy(
        "Enable update for users based on email",
        { as: "permissive", for: "update", to: ["public"] }
      ),
    };
  }
);

export const keepAlive = pgTable("keep_alive", {
  id: uuid().primaryKey(),
  createdAt: timestamp().defaultNow(),
});

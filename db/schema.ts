import {
  pgTable,
  timestamp,
  uuid,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo", {
  id: uuid("id").primaryKey().defaultRandom(),
  todoText: varchar("todo_text", { length: 255 }).notNull(),
  isDone: boolean("is_done").default(false),
  imageUrl: varchar("image_url", { length: 255 }), // ✅ เพิ่ม colume image
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date()
  ),
});

export const ownerTable = pgTable("owner", {
  id: varchar("id", { length: 20 }).primaryKey(), // ใช้ varchar แทน uuid
  name: varchar("name", { length: 255 }).notNull(),
  courseId: varchar("course_id", { length: 20 }).notNull(),
  section: varchar("section", { length: 10 }).notNull(),
  // userId: uuid("user_id").references(() => userTable.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 }).$onUpdate(
    () => new Date()
  ),
});

// ผู้ใช้ (สำหรับขยายในอนาคต / login)
export const userTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("username", { length: 255 }).notNull().unique(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export default {
  userTable,
  todoTable,
  ownerTable,
};

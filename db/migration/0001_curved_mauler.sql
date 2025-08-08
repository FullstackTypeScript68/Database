CREATE TABLE "owner" (
	"id" varchar(20) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"course_id" varchar(20) NOT NULL,
	"section" varchar(10) NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp (3)
);

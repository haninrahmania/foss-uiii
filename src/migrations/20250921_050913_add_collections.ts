import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_hero_cta_buttons_style" AS ENUM('primary', 'secondary');
  CREATE TYPE "public"."enum_programs_degree" AS ENUM('ma', 'mpp', 'phd', 'other');
  CREATE TYPE "public"."enum_research_category" AS ENUM('political-science', 'public-policy', 'international-relations', 'comparative-politics', 'political-theory', 'other');
  CREATE TYPE "public"."enum_research_research_type" AS ENUM('journal', 'working-paper', 'conference', 'book-chapter', 'thesis', 'other');
  CREATE TYPE "public"."enum_events_event_type" AS ENUM('brownbag', 'workshop', 'seminar', 'conference', 'lecture', 'other');
  CREATE TYPE "public"."enum_student_activities_student_year" AS ENUM('1st-year', '2nd-year', '3rd-year', '4th-year', 'graduate', 'phd');
  CREATE TYPE "public"."enum_student_activities_program" AS ENUM('ma-political-science', 'phd-political-science', 'mpp', 'other');
  CREATE TYPE "public"."enum_student_activities_category" AS ENUM('academic', 'research', 'conference', 'community', 'leadership', 'awards', 'internship', 'publication', 'other');
  CREATE TYPE "public"."enum_lecturer_activities_category" AS ENUM('research', 'conference', 'awards', 'funding', 'media', 'policy', 'collaboration', 'community', 'editorial', 'teaching', 'other');
  CREATE TYPE "public"."enum_alumni_activities_program" AS ENUM('ma-political-science', 'phd-political-science', 'mpp', 'other');
  CREATE TYPE "public"."enum_alumni_activities_category" AS ENUM('career', 'research', 'entrepreneurship', 'policy', 'international', 'community', 'awards', 'media', 'collaboration', 'mentorship', 'other');
  CREATE TYPE "public"."enum_people_group" AS ENUM('faculty', 'secretariat', 'student');
  CREATE TYPE "public"."enum_people_program" AS ENUM('phd-political-science', 'ma-political-science', 'mpp-climate-change', 'other');
  CREATE TYPE "public"."enum_compose_programs_type" AS ENUM('research-program', 'approach', 'fellowship');
  CREATE TYPE "public"."enum_publications_type" AS ENUM('lecturer', 'student', 'working-paper', 'compose-article');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar
  );
  
  CREATE TABLE "hero_cta_buttons" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL,
  	"href" varchar NOT NULL,
  	"style" "enum_hero_cta_buttons_style" DEFAULT 'primary'
  );
  
  CREATE TABLE "hero" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'UIII ADMISSIONS 2025/2026 NOW OPEN' NOT NULL,
  	"subtitle" varchar DEFAULT 'Take the next step in your academic journey with our world-class programs',
  	"background_image_id" integer,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"description" varchar,
  	"full_description" jsonb,
  	"details_page" varchar,
  	"order" numeric DEFAULT 0,
  	"duration" varchar,
  	"degree" "enum_programs_degree",
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "headlines_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "headlines" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"content" jsonb,
  	"published_date" timestamp(3) with time zone NOT NULL,
  	"author" varchar,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "research_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE "research" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"author" varchar NOT NULL,
  	"abstract" varchar NOT NULL,
  	"image_id" integer,
  	"content" jsonb,
  	"published_date" timestamp(3) with time zone NOT NULL,
  	"pdf_file_id" integer,
  	"category" "enum_research_category",
  	"research_type" "enum_research_research_type",
  	"journal" varchar,
  	"doi" varchar,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"event_date" timestamp(3) with time zone NOT NULL,
  	"event_time" varchar,
  	"location" varchar,
  	"register_link" varchar,
  	"event_type" "enum_events_event_type",
  	"speaker" varchar,
  	"speaker_bio" varchar,
  	"is_upcoming" boolean DEFAULT true,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "student_activities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"student" varchar NOT NULL,
  	"student_year" "enum_student_activities_student_year",
  	"program" "enum_student_activities_program",
  	"activity_date" timestamp(3) with time zone NOT NULL,
  	"category" "enum_student_activities_category",
  	"achievement" varchar,
  	"mentor" varchar,
  	"external_url" varchar,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "lecturer_activities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"lecturer" varchar NOT NULL,
  	"lecturer_title" varchar,
  	"department" varchar,
  	"activity_date" timestamp(3) with time zone NOT NULL,
  	"category" "enum_lecturer_activities_category",
  	"institution" varchar,
  	"achievement" varchar,
  	"collaborators" varchar,
  	"publication_url" varchar,
  	"media_url" varchar,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "alumni_activities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" jsonb NOT NULL,
  	"image_id" integer NOT NULL,
  	"alumni_name" varchar NOT NULL,
  	"graduation_year" numeric,
  	"program" "enum_alumni_activities_program",
  	"current_position" varchar,
  	"current_organization" varchar,
  	"activity_date" timestamp(3) with time zone NOT NULL,
  	"category" "enum_alumni_activities_category",
  	"achievement" varchar,
  	"impact" varchar,
  	"linkedin_url" varchar,
  	"external_url" varchar,
  	"quote" varchar,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "academic_programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"program_name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"overview" jsonb,
  	"learning_outcomes" jsonb,
  	"course_structure" jsonb,
  	"banner_image_id" integer,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "academic_program_landing" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"page_title" varchar NOT NULL,
  	"hero_title" varchar,
  	"hero_subtitle" varchar,
  	"hero_image_id" integer,
  	"intro_title" varchar,
  	"intro_description" varchar,
  	"vision" jsonb,
  	"mission" jsonb,
  	"is_published" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "academic_program_landing_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"academic_programs_id" integer
  );
  
  CREATE TABLE "people_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar
  );
  
  CREATE TABLE "people" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar,
  	"group" "enum_people_group" NOT NULL,
  	"position" varchar,
  	"program" "enum_people_program",
  	"photo_id" integer NOT NULL,
  	"bio" jsonb,
  	"is_active" boolean DEFAULT true,
  	"is_featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "compose_about_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "compose_about" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'About The Center' NOT NULL,
  	"logo_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "compose_vision_mission_missions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "compose_vision_mission" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"vision" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "compose_programs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"type" "enum_compose_programs_type" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "compose_principles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL,
  	"icon_id" integer,
  	"sort_order" numeric DEFAULT 100,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "publications_tags" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag" varchar
  );
  
  CREATE TABLE "publications" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"type" "enum_publications_type" NOT NULL,
  	"cover_id" integer NOT NULL,
  	"author_name" varchar NOT NULL,
  	"published_at" timestamp(3) with time zone NOT NULL,
  	"excerpt" varchar,
  	"content" jsonb,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"hero_id" integer,
  	"programs_id" integer,
  	"headlines_id" integer,
  	"research_id" integer,
  	"events_id" integer,
  	"student_activities_id" integer,
  	"lecturer_activities_id" integer,
  	"alumni_activities_id" integer,
  	"academic_programs_id" integer,
  	"academic_program_landing_id" integer,
  	"people_id" integer,
  	"compose_about_id" integer,
  	"compose_vision_mission_id" integer,
  	"compose_programs_id" integer,
  	"compose_principles_id" integer,
  	"publications_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero_cta_buttons" ADD CONSTRAINT "hero_cta_buttons_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "programs" ADD CONSTRAINT "programs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "headlines_tags" ADD CONSTRAINT "headlines_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."headlines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "headlines" ADD CONSTRAINT "headlines_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "research_keywords" ADD CONSTRAINT "research_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."research"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "research" ADD CONSTRAINT "research_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "research" ADD CONSTRAINT "research_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "student_activities" ADD CONSTRAINT "student_activities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "lecturer_activities" ADD CONSTRAINT "lecturer_activities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "alumni_activities" ADD CONSTRAINT "alumni_activities_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "academic_programs" ADD CONSTRAINT "academic_programs_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "academic_program_landing" ADD CONSTRAINT "academic_program_landing_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "academic_program_landing_rels" ADD CONSTRAINT "academic_program_landing_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."academic_program_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "academic_program_landing_rels" ADD CONSTRAINT "academic_program_landing_rels_academic_programs_fk" FOREIGN KEY ("academic_programs_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people_links" ADD CONSTRAINT "people_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "people" ADD CONSTRAINT "people_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "compose_about_paragraphs" ADD CONSTRAINT "compose_about_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."compose_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "compose_about" ADD CONSTRAINT "compose_about_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "compose_vision_mission_missions" ADD CONSTRAINT "compose_vision_mission_missions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."compose_vision_mission"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "compose_principles" ADD CONSTRAINT "compose_principles_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "publications_tags" ADD CONSTRAINT "publications_tags_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "publications" ADD CONSTRAINT "publications_cover_id_media_id_fk" FOREIGN KEY ("cover_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hero_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_programs_fk" FOREIGN KEY ("programs_id") REFERENCES "public"."programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_headlines_fk" FOREIGN KEY ("headlines_id") REFERENCES "public"."headlines"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_research_fk" FOREIGN KEY ("research_id") REFERENCES "public"."research"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_student_activities_fk" FOREIGN KEY ("student_activities_id") REFERENCES "public"."student_activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_lecturer_activities_fk" FOREIGN KEY ("lecturer_activities_id") REFERENCES "public"."lecturer_activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_alumni_activities_fk" FOREIGN KEY ("alumni_activities_id") REFERENCES "public"."alumni_activities"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_academic_programs_fk" FOREIGN KEY ("academic_programs_id") REFERENCES "public"."academic_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_academic_program_landing_fk" FOREIGN KEY ("academic_program_landing_id") REFERENCES "public"."academic_program_landing"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_people_fk" FOREIGN KEY ("people_id") REFERENCES "public"."people"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_compose_about_fk" FOREIGN KEY ("compose_about_id") REFERENCES "public"."compose_about"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_compose_vision_mission_fk" FOREIGN KEY ("compose_vision_mission_id") REFERENCES "public"."compose_vision_mission"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_compose_programs_fk" FOREIGN KEY ("compose_programs_id") REFERENCES "public"."compose_programs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_compose_principles_fk" FOREIGN KEY ("compose_principles_id") REFERENCES "public"."compose_principles"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_publications_fk" FOREIGN KEY ("publications_id") REFERENCES "public"."publications"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "hero_cta_buttons_order_idx" ON "hero_cta_buttons" USING btree ("_order");
  CREATE INDEX "hero_cta_buttons_parent_id_idx" ON "hero_cta_buttons" USING btree ("_parent_id");
  CREATE INDEX "hero_background_image_idx" ON "hero" USING btree ("background_image_id");
  CREATE INDEX "hero_updated_at_idx" ON "hero" USING btree ("updated_at");
  CREATE INDEX "hero_created_at_idx" ON "hero" USING btree ("created_at");
  CREATE UNIQUE INDEX "programs_slug_idx" ON "programs" USING btree ("slug");
  CREATE INDEX "programs_image_idx" ON "programs" USING btree ("image_id");
  CREATE INDEX "programs_updated_at_idx" ON "programs" USING btree ("updated_at");
  CREATE INDEX "programs_created_at_idx" ON "programs" USING btree ("created_at");
  CREATE INDEX "headlines_tags_order_idx" ON "headlines_tags" USING btree ("_order");
  CREATE INDEX "headlines_tags_parent_id_idx" ON "headlines_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "headlines_slug_idx" ON "headlines" USING btree ("slug");
  CREATE INDEX "headlines_image_idx" ON "headlines" USING btree ("image_id");
  CREATE INDEX "headlines_updated_at_idx" ON "headlines" USING btree ("updated_at");
  CREATE INDEX "headlines_created_at_idx" ON "headlines" USING btree ("created_at");
  CREATE INDEX "research_keywords_order_idx" ON "research_keywords" USING btree ("_order");
  CREATE INDEX "research_keywords_parent_id_idx" ON "research_keywords" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "research_slug_idx" ON "research" USING btree ("slug");
  CREATE INDEX "research_image_idx" ON "research" USING btree ("image_id");
  CREATE INDEX "research_pdf_file_idx" ON "research" USING btree ("pdf_file_id");
  CREATE INDEX "research_updated_at_idx" ON "research" USING btree ("updated_at");
  CREATE INDEX "research_created_at_idx" ON "research" USING btree ("created_at");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX "events_image_idx" ON "events" USING btree ("image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE UNIQUE INDEX "student_activities_slug_idx" ON "student_activities" USING btree ("slug");
  CREATE INDEX "student_activities_image_idx" ON "student_activities" USING btree ("image_id");
  CREATE INDEX "student_activities_updated_at_idx" ON "student_activities" USING btree ("updated_at");
  CREATE INDEX "student_activities_created_at_idx" ON "student_activities" USING btree ("created_at");
  CREATE UNIQUE INDEX "lecturer_activities_slug_idx" ON "lecturer_activities" USING btree ("slug");
  CREATE INDEX "lecturer_activities_image_idx" ON "lecturer_activities" USING btree ("image_id");
  CREATE INDEX "lecturer_activities_updated_at_idx" ON "lecturer_activities" USING btree ("updated_at");
  CREATE INDEX "lecturer_activities_created_at_idx" ON "lecturer_activities" USING btree ("created_at");
  CREATE UNIQUE INDEX "alumni_activities_slug_idx" ON "alumni_activities" USING btree ("slug");
  CREATE INDEX "alumni_activities_image_idx" ON "alumni_activities" USING btree ("image_id");
  CREATE INDEX "alumni_activities_updated_at_idx" ON "alumni_activities" USING btree ("updated_at");
  CREATE INDEX "alumni_activities_created_at_idx" ON "alumni_activities" USING btree ("created_at");
  CREATE UNIQUE INDEX "academic_programs_slug_idx" ON "academic_programs" USING btree ("slug");
  CREATE INDEX "academic_programs_banner_image_idx" ON "academic_programs" USING btree ("banner_image_id");
  CREATE INDEX "academic_programs_updated_at_idx" ON "academic_programs" USING btree ("updated_at");
  CREATE INDEX "academic_programs_created_at_idx" ON "academic_programs" USING btree ("created_at");
  CREATE INDEX "academic_program_landing_hero_image_idx" ON "academic_program_landing" USING btree ("hero_image_id");
  CREATE INDEX "academic_program_landing_updated_at_idx" ON "academic_program_landing" USING btree ("updated_at");
  CREATE INDEX "academic_program_landing_created_at_idx" ON "academic_program_landing" USING btree ("created_at");
  CREATE INDEX "academic_program_landing_rels_order_idx" ON "academic_program_landing_rels" USING btree ("order");
  CREATE INDEX "academic_program_landing_rels_parent_idx" ON "academic_program_landing_rels" USING btree ("parent_id");
  CREATE INDEX "academic_program_landing_rels_path_idx" ON "academic_program_landing_rels" USING btree ("path");
  CREATE INDEX "academic_program_landing_rels_academic_programs_id_idx" ON "academic_program_landing_rels" USING btree ("academic_programs_id");
  CREATE INDEX "people_links_order_idx" ON "people_links" USING btree ("_order");
  CREATE INDEX "people_links_parent_id_idx" ON "people_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "people_slug_idx" ON "people" USING btree ("slug");
  CREATE INDEX "people_photo_idx" ON "people" USING btree ("photo_id");
  CREATE INDEX "people_updated_at_idx" ON "people" USING btree ("updated_at");
  CREATE INDEX "people_created_at_idx" ON "people" USING btree ("created_at");
  CREATE INDEX "compose_about_paragraphs_order_idx" ON "compose_about_paragraphs" USING btree ("_order");
  CREATE INDEX "compose_about_paragraphs_parent_id_idx" ON "compose_about_paragraphs" USING btree ("_parent_id");
  CREATE INDEX "compose_about_logo_idx" ON "compose_about" USING btree ("logo_id");
  CREATE INDEX "compose_about_updated_at_idx" ON "compose_about" USING btree ("updated_at");
  CREATE INDEX "compose_about_created_at_idx" ON "compose_about" USING btree ("created_at");
  CREATE INDEX "compose_vision_mission_missions_order_idx" ON "compose_vision_mission_missions" USING btree ("_order");
  CREATE INDEX "compose_vision_mission_missions_parent_id_idx" ON "compose_vision_mission_missions" USING btree ("_parent_id");
  CREATE INDEX "compose_vision_mission_updated_at_idx" ON "compose_vision_mission" USING btree ("updated_at");
  CREATE INDEX "compose_vision_mission_created_at_idx" ON "compose_vision_mission" USING btree ("created_at");
  CREATE INDEX "compose_programs_updated_at_idx" ON "compose_programs" USING btree ("updated_at");
  CREATE INDEX "compose_programs_created_at_idx" ON "compose_programs" USING btree ("created_at");
  CREATE INDEX "compose_principles_icon_idx" ON "compose_principles" USING btree ("icon_id");
  CREATE INDEX "compose_principles_updated_at_idx" ON "compose_principles" USING btree ("updated_at");
  CREATE INDEX "compose_principles_created_at_idx" ON "compose_principles" USING btree ("created_at");
  CREATE INDEX "publications_tags_order_idx" ON "publications_tags" USING btree ("_order");
  CREATE INDEX "publications_tags_parent_id_idx" ON "publications_tags" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "publications_slug_idx" ON "publications" USING btree ("slug");
  CREATE INDEX "publications_cover_idx" ON "publications" USING btree ("cover_id");
  CREATE INDEX "publications_updated_at_idx" ON "publications" USING btree ("updated_at");
  CREATE INDEX "publications_created_at_idx" ON "publications" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_hero_id_idx" ON "payload_locked_documents_rels" USING btree ("hero_id");
  CREATE INDEX "payload_locked_documents_rels_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("programs_id");
  CREATE INDEX "payload_locked_documents_rels_headlines_id_idx" ON "payload_locked_documents_rels" USING btree ("headlines_id");
  CREATE INDEX "payload_locked_documents_rels_research_id_idx" ON "payload_locked_documents_rels" USING btree ("research_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_student_activities_id_idx" ON "payload_locked_documents_rels" USING btree ("student_activities_id");
  CREATE INDEX "payload_locked_documents_rels_lecturer_activities_id_idx" ON "payload_locked_documents_rels" USING btree ("lecturer_activities_id");
  CREATE INDEX "payload_locked_documents_rels_alumni_activities_id_idx" ON "payload_locked_documents_rels" USING btree ("alumni_activities_id");
  CREATE INDEX "payload_locked_documents_rels_academic_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("academic_programs_id");
  CREATE INDEX "payload_locked_documents_rels_academic_program_landing_i_idx" ON "payload_locked_documents_rels" USING btree ("academic_program_landing_id");
  CREATE INDEX "payload_locked_documents_rels_people_id_idx" ON "payload_locked_documents_rels" USING btree ("people_id");
  CREATE INDEX "payload_locked_documents_rels_compose_about_id_idx" ON "payload_locked_documents_rels" USING btree ("compose_about_id");
  CREATE INDEX "payload_locked_documents_rels_compose_vision_mission_id_idx" ON "payload_locked_documents_rels" USING btree ("compose_vision_mission_id");
  CREATE INDEX "payload_locked_documents_rels_compose_programs_id_idx" ON "payload_locked_documents_rels" USING btree ("compose_programs_id");
  CREATE INDEX "payload_locked_documents_rels_compose_principles_id_idx" ON "payload_locked_documents_rels" USING btree ("compose_principles_id");
  CREATE INDEX "payload_locked_documents_rels_publications_id_idx" ON "payload_locked_documents_rels" USING btree ("publications_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "hero_cta_buttons" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "programs" CASCADE;
  DROP TABLE "headlines_tags" CASCADE;
  DROP TABLE "headlines" CASCADE;
  DROP TABLE "research_keywords" CASCADE;
  DROP TABLE "research" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "student_activities" CASCADE;
  DROP TABLE "lecturer_activities" CASCADE;
  DROP TABLE "alumni_activities" CASCADE;
  DROP TABLE "academic_programs" CASCADE;
  DROP TABLE "academic_program_landing" CASCADE;
  DROP TABLE "academic_program_landing_rels" CASCADE;
  DROP TABLE "people_links" CASCADE;
  DROP TABLE "people" CASCADE;
  DROP TABLE "compose_about_paragraphs" CASCADE;
  DROP TABLE "compose_about" CASCADE;
  DROP TABLE "compose_vision_mission_missions" CASCADE;
  DROP TABLE "compose_vision_mission" CASCADE;
  DROP TABLE "compose_programs" CASCADE;
  DROP TABLE "compose_principles" CASCADE;
  DROP TABLE "publications_tags" CASCADE;
  DROP TABLE "publications" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_hero_cta_buttons_style";
  DROP TYPE "public"."enum_programs_degree";
  DROP TYPE "public"."enum_research_category";
  DROP TYPE "public"."enum_research_research_type";
  DROP TYPE "public"."enum_events_event_type";
  DROP TYPE "public"."enum_student_activities_student_year";
  DROP TYPE "public"."enum_student_activities_program";
  DROP TYPE "public"."enum_student_activities_category";
  DROP TYPE "public"."enum_lecturer_activities_category";
  DROP TYPE "public"."enum_alumni_activities_program";
  DROP TYPE "public"."enum_alumni_activities_category";
  DROP TYPE "public"."enum_people_group";
  DROP TYPE "public"."enum_people_program";
  DROP TYPE "public"."enum_compose_programs_type";
  DROP TYPE "public"."enum_publications_type";`)
}

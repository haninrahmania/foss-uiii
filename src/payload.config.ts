import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";

const validateEnv = () => {
  const errors: string[] = [];

  // Check for missing environment variables
  if (!process.env.PAYLOAD_SECRET) {
    errors.push("PAYLOAD_SECRET is required");
  }

  if (!process.env.DATABASE_URI) {
    errors.push("DATABASE_URI is required");
  }

  if (!process.env.FRONTEND_URL) {
    errors.push("FRONTEND_URL is required");
  }

  // Throw error if any environment variables are missing
  if (errors.length > 0) {
    throw new Error(`Environment validation failed:\n${errors.join("\n")}`);
  }

  // Return validated environment variables with proper typing
  return {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET!,
    DATABASE_URI: process.env.DATABASE_URI!,
    FRONTEND_URL: process.env.FRONTEND_URL!,
  };
};

// import { Media } from './src/app/(payload)/collections/LandingPage/media.js'
// import { Hero } from './src/app/(payload)/collections/LandingPage/Hero.js'
// import { Headlines } from './src/app/(payload)/collections/LandingPage/Headlines.js'
// import { Research } from './src/app/(payload)/collections/LandingPage/Research.js'
// import { Programs } from './src/app/(payload)/collections/LandingPage/Programs.js'

import { Media } from "@/(payload)/collections/LandingPage/media";
import { Users } from "@/(payload)/collections/users";
import { Events } from "@/(payload)/collections/CampusLife/Events";
import { StudentActivities } from "@/(payload)/collections/CampusLife/StudentsActivities";
import { LecturerActivities } from "@/(payload)/collections/CampusLife/LecturerActivities";
import { AlumniActivities } from "@/(payload)/collections/CampusLife/AlumniActivities";
import { AcademicPrograms } from "@/(payload)/collections/AcademicProgram/academic-program";
import { AcademicProgramLanding } from "@/(payload)/collections/AcademicProgram/academic-program-landing";
import { Hero } from "@/(payload)/collections/LandingPage/Hero";
import { Headlines } from "@/(payload)/collections/LandingPage/Headlines";
import { Research } from "@/(payload)/collections/LandingPage/Research";
import { Programs } from "@/(payload)/collections/LandingPage/Programs";

import { PeopleCollections } from "@/(payload)/collections/people";
import { ResearchAndPublicationCollections } from "@/(payload)/collections/research-and-publication";

// Get validated environment variables
let env: {
  PAYLOAD_SECRET: string;
  DATABASE_URI: string;
  FRONTEND_URL: string;
};

try {
  env = validateEnv();
  console.log("Environment variables validated successfully");
} catch (error) {
  console.error("Configuration error:");
  if (error instanceof Error) {
    console.error(error.message);
  }

  // In production, exit with error code
  if (process.env.NODE_ENV === "production") {
    console.error("Exiting due to missing required environment variables");
    process.exit(1);
  }

  // In development, provide fallback values
  console.warn("Using fallback environment values for development only");
  env = {
    PAYLOAD_SECRET: "fallback-secret-for-development-only",
    DATABASE_URI: "postgresql://postgres:postgres@localhost:5432/payload",
    FRONTEND_URL: "http://localhost:3001",
  };
}

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    Users,
    Media,

    // landing
    Hero,
    Programs,
    Headlines,
    Research,

    // campus life
    Events,
    StudentActivities,
    LecturerActivities,
    AlumniActivities,

    // academic program
    AcademicPrograms,
    AcademicProgramLanding,

    // people
    ...PeopleCollections,

    // research & publication
    ...ResearchAndPublicationCollections,
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: env.PAYLOAD_SECRET,

  // PostgreSQL Database Adapter
  db: postgresAdapter({
    pool: {
      connectionString: env.DATABASE_URI,
    },
  }),

  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,

  // Admin panel configuration
  admin: {
    user: "users",
  },

  // CORS settings for frontend access
  cors: [env.FRONTEND_URL],

  // TypeScript generation
  typescript: {
    outputFile: "./payload-types.ts",
  },
});

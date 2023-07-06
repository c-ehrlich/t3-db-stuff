import * as dotenv from "dotenv";
import { type Config } from "drizzle-kit";

dotenv.config();

export default {
  driver: "mysql2",
  schema: "./src/server/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  breakpoints: true,
} satisfies Config;

import * as schema from "./schema";
import { connect } from "@planetscale/database";
import { drizzle as drizzlePlanetScale } from "drizzle-orm/planetscale-serverless";
import { drizzle as drizzleMysql } from "drizzle-orm/mysql2";
import { env } from "~/env.mjs";
import mysql from "mysql2/promise";

export const db =
  env.NODE_ENV === "production"
    ? drizzlePlanetScale(connect({ url: env.DATABASE_URL }), { schema })
    : drizzleMysql(
        await mysql.createConnection({
          uri: env.DATABASE_URL,
        }),
        { schema }
      );

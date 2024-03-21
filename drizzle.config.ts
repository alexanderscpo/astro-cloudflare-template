import type { Config } from "drizzle-kit";

const {
  LOCAL_DB_PATH,
  WRANGLER_CONFIG,
  DB_NAME = "d1-demo-prod-db",
} = process.env;

export default {
  schema: "./src/schema/*",
  driver: "d1",
  out: "./migrations",
  dbCredentials: {
    wranglerConfigPath:
      new URL("wrangler.toml", import.meta.url).pathname +
      // This is a hack to inject additional cli flags to wrangler
      // since drizzle-kit doesn't support specifying environments
      WRANGLER_CONFIG
        ? ` ${WRANGLER_CONFIG}`
        : "",
    dbName: DB_NAME,
  },
} satisfies Config;

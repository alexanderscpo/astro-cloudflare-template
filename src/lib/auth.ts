import { Lucia, TimeSpan } from "lucia";
import { drizzle } from "drizzle-orm/d1";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";

import { user, session } from "../schema/user";

const db = drizzle(import.meta.env.DB);
const adapter = new DrizzleSQLiteAdapter(db, session, user); // your adapter

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD,
    },
  },
  sessionExpiresIn: new TimeSpan(1, "w"),
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
  }
}

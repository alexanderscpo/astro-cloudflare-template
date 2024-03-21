import type { APIContext } from "astro";
import { drizzle } from "drizzle-orm/d1";
import { user } from "../../schema/user";

export async function GET({ locals }: APIContext) {
  const { DB } = locals.runtime.env;
  const db = drizzle(DB);
  const result = await db.select().from(user).all();
  return new Response(JSON.stringify(result));
}

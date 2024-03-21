/// <reference types="astro/client" />

type D1Database = import("@cloudflare/workers-types").D1Database;

type ENV = {
  DB: D1Database;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;
declare namespace App {
  interface Locals extends Runtime {
    session: import("lucia").Session | null;
    user: import("lucia").User | null;
  }
}

interface ImportMetaEnv {
  readonly DB: D1Database;
}

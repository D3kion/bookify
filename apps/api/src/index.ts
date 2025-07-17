import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";

import { instrumentation } from "./instrumentation";
import { betterAuthCtl } from "./auth";

const app = new Elysia()
  .use(instrumentation)
  .use(swagger({ scalarCDN: "https://unpkg.com/@scalar/api-reference@latest/dist/browser/standalone.js" }))
  .get("/health", () => ({ status: "ok" }))
  .mount(betterAuthCtl)
  .listen(4000);

console.log(`🦊 Elysia is running at ${app.server?.url}`);

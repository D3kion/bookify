import Elysia, { Context } from "elysia";
import { betterAuth } from "better-auth";
import { openAPI } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite" }),
  plugins: [openAPI({ disableDefaultReference: process.env.NODE_ENV === "production", path: "/swagger" })],
  emailAndPassword: {
    enabled: true,
  },
});

export const betterAuthCtl = new Elysia({ name: "better-auth" }).all("/api/auth/*", betterAuthView).macro({
  auth: {
    async resolve({ status, request: { headers } }) {
      const session = await auth.api.getSession({
        headers,
      });

      if (!session) return status(401);

      return {
        user: session.user,
        session: session.session,
      };
    },
  },
});

function betterAuthView(context: Context) {
  const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];
  // validate request method
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    return auth.handler(context.request);
  } else {
    context.error(405);
  }
}

import Elysia, { Context } from "elysia";
import { betterAuth } from "better-auth";
import { magicLink, openAPI } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db, schema } from "@bookify/db";

const IS_PROD = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: "sqlite", schema }),
  plugins: [
    magicLink({
      storeToken: "hashed",
      expiresIn: 15 * 60, // 15 min
      sendMagicLink: async ({ email, token, url }) => {
        // TODO: send email to user
        console.log("send magic link", email, token, url);
      },
    }),
    openAPI({ disableDefaultReference: IS_PROD, path: "/swagger" }),
  ],
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
    context.status(405);
  }
}

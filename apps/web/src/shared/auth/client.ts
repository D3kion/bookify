import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  baseURL: typeof window === "undefined" ? "http://localhost:4000" : undefined,
  plugins: [magicLinkClient()],
});

"use server";

import { headers } from "next/headers";

import { authClient } from "./client";

export async function getProxySession() {
  const { data, error } = await authClient.getSession({
    fetchOptions: { headers: await headers() },
  });
  if (error) console.error("proxy session error", error);
  return data;
}

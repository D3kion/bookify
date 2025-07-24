import { PropsWithChildren, Suspense } from "react";
import { redirect } from "next/navigation";

import { getProxySession } from "@/shared/auth";

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await getProxySession();
  if (!session) return redirect("/auth");

  return <Suspense fallback={<div>Loading app layout...</div>}>{children}</Suspense>;
}

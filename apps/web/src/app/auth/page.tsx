import { redirect } from "next/navigation";

import { getProxySession } from "@/shared/auth";
import { AuthForm } from "@/features/auth";

export default async function AuthPage() {
  const session = await getProxySession();
  if (session) return redirect("/app");

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <AuthForm className="max-w-sm" />
    </div>
  );
}

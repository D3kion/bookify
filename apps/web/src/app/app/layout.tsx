import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { getProxySession } from "@/shared/auth";
import { SidebarInset, SidebarProvider } from "@/shared/ui-kit";

import { AppSidebar } from "./_app-sidebar";
import { SiteHeader } from "./_site-header";

export default async function AppLayout({ children }: PropsWithChildren) {
  const session = await getProxySession();
  if (!session) return redirect("/auth");

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

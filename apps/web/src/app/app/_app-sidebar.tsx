"use client";

import {
  HelpCircleIcon,
  Settings2Icon,
  Users2Icon,
  CheckCircle2Icon,
  HomeIcon,
  CalendarIcon,
  ChartPieIcon,
  UserRoundCogIcon,
  FileSlidersIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/ui-kit";

import { NavMain } from "./_nav-main";
import { NavSecondary } from "./_nav-secondary";
import { NavUser } from "./_nav-user";
// import { NavDocuments } from "...";

const data = {
  user: {
    name: "Bookify Dev",
    email: "Roman S",
    avatar: "/avatars/dekion.jpg",
  },
  navMain: [
    {
      title: "Главная",
      url: "/app",
      icon: HomeIcon,
    },
    {
      title: "Аналитика",
      url: "#",
      icon: ChartPieIcon,
      disabled: true,
    },
    {
      title: "Календарь",
      url: "#",
      icon: CalendarIcon,
    },
    {
      title: "Клиенты",
      url: "#",
      icon: Users2Icon,
    },
    {
      title: "Команда",
      url: "#",
      icon: UserRoundCogIcon,
      disabled: true,
    },
    {
      title: "Услуги",
      url: "#",
      icon: FileSlidersIcon,
    },
  ],
  navSecondary: [
    {
      title: "Настройки",
      url: "#",
      icon: Settings2Icon,
    },
    {
      title: "Центр помощи",
      url: "#",
      icon: HelpCircleIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <a href="/app">
                <CheckCircle2Icon className="!size-5" />
                <span className="text-base font-semibold">Bookify</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}

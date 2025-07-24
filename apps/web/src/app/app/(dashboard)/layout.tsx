"use client";

import React, { PropsWithChildren, Suspense, useState } from "react";
import { redirect } from "next/navigation";
import {
  Calendar,
  Home,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Bot,
  Crown,
  Gift,
  MessageSquare,
  Phone,
  LogOut,
  HelpCircle,
} from "lucide-react";

import { authClient } from "@/shared/auth";
import { Button, Badge, Progress } from "@/shared/ui-kit";

interface SidebarItem {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
}

export default function DashboardLayout({ children }: PropsWithChildren) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const searchParams = useSearchParams()

  const sidebarItems: SidebarItem[] = [
    { icon: Home, label: "Главная", href: "/dashboard", active: true },
    { icon: Calendar, label: "Календарь", href: "/dashboard/calendar", badge: "3" },
    { icon: Users, label: "Клиенты", href: "/dashboard/clients", badge: "89" },
    { icon: BarChart3, label: "Аналитика", href: "/dashboard/analytics" },
    { icon: Settings, label: "Настройки", href: "/dashboard/settings" },
  ];

  const stats = {
    profileCompletion: 85,
    freeSlots: 27,
    totalSlots: 30,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Bookify
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
            </div>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Bookify
                  </span>
                </div>
                <div className="hidden md:block">
                  <h1 className="text-lg font-semibold text-gray-900">Салон красоты &quot;Элегант&quot;</h1>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Search */}
                <div className="hidden md:block relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Поиск записей..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Quick Actions */}
                <div className="hidden lg:flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Звонок
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    SMS
                  </Button>
                </div>

                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">3</span>
                  </span>
                </Button>

                {/* Profile */}
                <div
                  className="flex items-center space-x-2"
                  onClick={() => authClient.signOut().then(() => redirect("/"))}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">А</span>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-700">Анна Иванова</div>
                    <div className="text-xs text-gray-500">Мастер</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Mobile Sidebar Overlay */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
              <div className="relative flex flex-col w-80 bg-white border-r border-gray-200 shadow-xl">
                {/* Mobile Sidebar Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Bookify
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                {/* Mobile Sidebar Content */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-4 space-y-2">
                    {sidebarItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.label}
                          variant={item.active ? "default" : "ghost"}
                          className="w-full justify-start h-12"
                          onClick={() => setSidebarOpen(false)}
                        >
                          <Icon className="w-5 h-5 mr-3" />
                          <span className="flex-1 text-left">{item.label}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </Button>
                      );
                    })}
                  </nav>

                  <div className="p-4 border-t border-gray-200">
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start h-12">
                        <Bot className="w-5 h-5 mr-3" />
                        AI-Помощник
                        <Badge className="ml-auto bg-purple-100 text-purple-800">Новое</Badge>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-12">
                        <Crown className="w-5 h-5 mr-3" />
                        Тарифы
                      </Button>
                      <Button variant="ghost" className="w-full justify-start h-12">
                        <HelpCircle className="w-5 h-5 mr-3" />
                        Помощь
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Profile Progress */}
                  <div className="p-4 border-t border-gray-200">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Профиль заполнен</span>
                        <span className="text-sm text-blue-600 font-bold">{stats.profileCompletion}%</span>
                      </div>
                      <Progress value={stats.profileCompletion} className="h-2 mb-3" />
                      <Button size="sm" variant="outline" className="w-full text-xs bg-white">
                        Заполнить профиль
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Logout */}
                  <div className="p-4 border-t border-gray-200">
                    <Button
                      variant="ghost"
                      className="w-full justify-start h-12 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="w-5 h-5 mr-3" />
                      Выйти
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-80 bg-white border-r border-gray-200 min-h-screen">
            <div className="flex flex-col h-full">
              {/* Sidebar Navigation */}
              <nav className="flex-1 p-6 space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.label}
                      variant={item.active ? "default" : "ghost"}
                      className="w-full justify-start h-12 text-base"
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  );
                })}

                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button variant="ghost" className="w-full justify-start h-12">
                    <Bot className="w-5 h-5 mr-3" />
                    <span className="flex-1 text-left">AI-Помощник</span>
                    <Badge className="ml-auto bg-purple-100 text-purple-800">Новое</Badge>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-12">
                    <Crown className="w-5 h-5 mr-3" />
                    Тарифы
                  </Button>
                  <Button variant="ghost" className="w-full justify-start h-12">
                    <HelpCircle className="w-5 h-5 mr-3" />
                    Помощь
                  </Button>
                </div>
              </nav>

              {/* Profile Progress */}
              <div className="p-6 border-t border-gray-200">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Профиль заполнен</span>
                    <span className="text-sm text-blue-600 font-bold">{stats.profileCompletion}%</span>
                  </div>
                  <Progress value={stats.profileCompletion} className="h-2 mb-3" />
                  <Button size="sm" variant="outline" className="w-full text-xs bg-white">
                    Заполнить профиль
                  </Button>
                </div>

                {/* Usage Stats */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Записи в месяц</span>
                    <Crown className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    {stats.freeSlots} из {stats.totalSlots}
                  </div>
                  <Progress value={(stats.freeSlots / stats.totalSlots) * 100} className="h-2 mb-3" />
                  <Button size="sm" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-xs">
                    <Gift className="w-3 h-3 mr-2" />
                    Обновить тариф
                  </Button>
                </div>
              </div>

              {/* Logout */}
              <div className="p-6 border-t border-gray-200">
                <Button
                  variant="ghost"
                  className="w-full justify-start h-12 text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Выйти
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-h-screen">{children}</main>
        </div>
      </div>
    </Suspense>
  );
}

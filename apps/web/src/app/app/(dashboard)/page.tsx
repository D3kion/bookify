"use client";

import {
  Calendar,
  Users,
  Phone,
  MessageSquare,
  Plus,
  Filter,
  MoreVertical,
  Star,
  DollarSign,
  ChevronRight,
  Bot,
  Target,
  ArrowUpRight,
  UserCheck,
  Sparkles,
  TrendingUp,
  CheckCircle,
  Gift,
  Zap,
  AlertCircle,
  Crown,
} from "lucide-react";

import { Button, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui-kit";

interface Booking {
  id: string;
  clientName: string;
  clientPhone: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

interface Notification {
  id: string;
  type: "booking" | "review" | "reminder" | "system";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export default function DashboardPage() {
  // const [selectedDate, setSelectedDate] = useState(new Date())

  // Mock data
  const todayBookings: Booking[] = [
    {
      id: "1",
      clientName: "Анна Петрова",
      clientPhone: "+7 (999) 123-45-67",
      service: "Стрижка + укладка",
      date: "2024-01-15",
      time: "10:00",
      duration: 90,
      price: 3500,
      status: "confirmed",
    },
    {
      id: "2",
      clientName: "Мария Сидорова",
      clientPhone: "+7 (999) 234-56-78",
      service: "Маникюр",
      date: "2024-01-15",
      time: "12:00",
      duration: 60,
      price: 2000,
      status: "pending",
    },
    {
      id: "3",
      clientName: "Елена Козлова",
      clientPhone: "+7 (999) 345-67-89",
      service: "Окрашивание",
      date: "2024-01-15",
      time: "14:30",
      duration: 120,
      price: 4500,
      status: "confirmed",
    },
  ];

  const notifications: Notification[] = [
    {
      id: "1",
      type: "booking",
      title: "Новая запись",
      message: "Мария С. записалась на маникюр",
      time: "2 мин назад",
      read: false,
    },
    {
      id: "2",
      type: "review",
      title: "Новый отзыв",
      message: "Анна П. оставила отзыв (5 звезд)",
      time: "15 мин назад",
      read: false,
    },
    {
      id: "3",
      type: "reminder",
      title: "Напоминание отправлено",
      message: "SMS отправлено Елене К.",
      time: "1 час назад",
      read: true,
    },
  ];

  const stats = {
    todayBookings: 3,
    todayRevenue: 10000,
    weekBookings: 18,
    monthRevenue: 85000,
    newClients: 5,
    rating: 4.9,
    growthRate: 12,
    completionRate: 95,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Подтверждена";
      case "pending":
        return "Ожидает";
      case "completed":
        return "Завершена";
      case "cancelled":
        return "Отменена";
      default:
        return status;
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "booking":
        return <Calendar className="w-4 h-4 text-blue-500" />;
      case "review":
        return <Star className="w-4 h-4 text-yellow-500" />;
      case "reminder":
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      case "system":
        return <AlertCircle className="w-4 h-4 text-purple-500" />;
      default:
        return <CheckCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* Welcome Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Добро пожаловать, Анна! 👋</h1>
          <p className="text-gray-600 text-lg">
            Сегодня у вас <span className="font-semibold text-blue-600">{stats.todayBookings} записи</span> на сумму{" "}
            <span className="font-semibold text-green-600">{stats.todayRevenue.toLocaleString("ru")}₽</span>
          </p>
        </div>
        <div className="mt-4 lg:mt-0 flex flex-col sm:flex-row gap-3">
          <Button size="lg" variant="outline" className="bg-white">
            <Target className="w-5 h-5 mr-2" />
            Цели месяца
          </Button>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Plus className="w-5 h-5 mr-2" />
            Новая запись
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-blue-500">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Записи сегодня</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stats.todayBookings}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+{stats.growthRate}%</span>
              <span className="text-gray-500 ml-1">от вчера</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-green-500">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Выручка</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {stats.todayRevenue.toLocaleString("ru")}₽
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+8%</span>
              <span className="text-gray-500 ml-1">от вчера</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-purple-500">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Новые клиенты</p>
                <p className="text-2xl lg:text-3xl font-bold text-gray-900">{stats.newClients}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <ArrowUpRight className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-green-600 font-medium">+15%</span>
              <span className="text-gray-500 ml-1">за неделю</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-all duration-200 border-l-4 border-l-yellow-500">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Рейтинг</p>
                <div className="flex items-center">
                  <p className="text-2xl lg:text-3xl font-bold text-gray-900 mr-2">{stats.rating}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
            <div className="mt-4 flex items-center text-sm">
              <span className="text-gray-500">47 отзывов</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
        {/* Today's Schedule */}
        <div className="xl:col-span-2">
          <Card className="h-fit">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-xl lg:text-2xl">Расписание на сегодня</CardTitle>
                <CardDescription className="text-base">
                  15 января 2024, понедельник • {stats.completionRate}% выполнение
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="hidden sm:flex bg-white">
                  <Filter className="w-4 h-4 mr-2" />
                  Фильтр
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Добавить</span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-md hover:border-blue-200 transition-all duration-200"
                  >
                    <div className="flex items-center space-x-4 mb-3 sm:mb-0">
                      <div className="text-center min-w-[70px] bg-gray-50 rounded-lg p-2">
                        <div className="text-lg font-bold text-gray-900">{booking.time}</div>
                        <div className="text-xs text-gray-500">{booking.duration} мин</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 mb-2">
                          <h3 className="font-semibold text-gray-900 truncate">{booking.clientName}</h3>
                          <Badge className={`${getStatusColor(booking.status)} text-xs w-fit`}>
                            {getStatusText(booking.status)}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 truncate mb-1">{booking.service}</p>
                        <p className="text-xs text-gray-500 sm:hidden">{booking.clientPhone}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:flex-col sm:items-end">
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">{booking.price.toLocaleString("ru")}₽</div>
                        <p className="text-xs text-gray-500 hidden sm:block">{booking.clientPhone}</p>
                      </div>
                      <div className="flex space-x-1 mt-2 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-blue-50">
                          <Phone className="w-4 h-4 text-blue-600" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-green-50">
                          <MessageSquare className="w-4 h-4 text-green-600" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-50">
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {todayBookings.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Записей на сегодня нет</h3>
                    <p className="text-gray-500 mb-4">Добавьте новую запись или дождитесь клиентов</p>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                      <Plus className="w-4 h-4 mr-2" />
                      Добавить запись
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                Быстрые действия
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start h-12 bg-white hover:bg-blue-50">
                <Plus className="w-5 h-5 mr-3 text-blue-600" />
                Новая запись
              </Button>
              <Button variant="outline" className="w-full justify-start h-12 bg-white hover:bg-purple-50">
                <Users className="w-5 h-5 mr-3 text-purple-600" />
                Добавить клиента
              </Button>
              <Button variant="outline" className="w-full justify-start h-12 bg-white hover:bg-green-50">
                <MessageSquare className="w-5 h-5 mr-3 text-green-600" />
                Отправить SMS
              </Button>
              <Button variant="outline" className="w-full justify-start h-12 bg-white hover:bg-yellow-50">
                <Phone className="w-5 h-5 mr-3 text-yellow-600" />
                Позвонить клиенту
              </Button>
            </CardContent>
          </Card>

          {/* AI Assistant */}
          <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Bot className="w-6 h-6 text-purple-600" />
                <CardTitle className="text-lg text-purple-800">AI-Помощник</CardTitle>
                <Badge className="bg-purple-100 text-purple-800 text-xs">Новое</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-white/50">
                  <p className="text-sm text-purple-700 mb-2 flex items-center font-medium">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Рекомендация дня:
                  </p>
                  <p className="text-sm text-gray-700 mb-3">
                    У вас есть свободное время с 16:00 до 18:00. Предложить клиентам скидку 15% на экспресс-услуги?
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 flex-1">
                      Применить
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white">
                      Позже
                    </Button>
                  </div>
                </div>
                <Button size="sm" variant="outline" className="w-full bg-white/70">
                  Открыть AI-чат
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                Последняя активность
                <Badge variant="secondary">{notifications.filter((n) => !n.read).length}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {notifications.slice(0, 4).map((notification) => (
                  <div key={notification.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">{getNotificationIcon(notification.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">{notification.title}</p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-2"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate">{notification.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" size="sm" className="w-full mt-4 text-blue-600 hover:bg-blue-50">
                Показать все уведомления
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* Upgrade Banner */}
          <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
            <CardContent className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-6 h-6 text-yellow-600" />
                <span className="font-bold text-yellow-800 text-lg">Премиум</span>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Получите безлимитные записи, AI-оптимизацию и приоритетную поддержку
              </p>
              <div className="bg-white/70 p-3 rounded-lg mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">490₽</div>
                  <div className="text-sm text-gray-600">в месяц</div>
                </div>
              </div>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
              >
                <Gift className="w-4 h-4 mr-2" />
                Обновить тариф
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

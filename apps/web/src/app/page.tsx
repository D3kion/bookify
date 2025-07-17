import {
  Calendar,
  Smartphone,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Bot,
  MessageSquare,
  Shield,
  Clock,
} from "lucide-react";

import { Button, Badge, Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui-kit";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bookify
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Возможности
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Тарифы
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Контакты
            </a>
          </nav>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            asChild
          >
            <Link href="/auth">Войти</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-transparent"></div>
        <div className="container mx-auto text-center relative">
          <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-100 animate-pulse">
            🚀 Запуск в России • 10,000+ довольных мастеров
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
            Увеличьте доходы на 40%
            <br />
            <span className="text-3xl md:text-5xl lg:text-6xl">за первый месяц</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Bookify — №1 сервис онлайн-записи в России. Клиенты записываются сами 24/7, вы получаете больше заказов без
            лишних звонков и потерянных клиентов.
          </p>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="flex -space-x-2 mr-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-2 border-white flex items-center justify-center"
                  >
                    <span className="text-white text-xs font-medium">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <span>10,000+ мастеров</span>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span>4.9/5 (2,847 отзывов)</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              <span>Проверено Роскачеством</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Начать бесплатно — 30 записей
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-2 hover:bg-white"
            >
              <span className="mr-2">▶️</span>
              Посмотреть демо (2 мин)
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-blue-600 mb-1">30</div>
              <div className="text-gray-600 text-sm">записей бесплатно</div>
              <div className="text-xs text-green-600 mt-1">💰 Экономия 14,700₽</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-purple-600 mb-1">490₽</div>
              <div className="text-gray-600 text-sm">от / месяц</div>
              <div className="text-xs text-blue-600 mt-1">🎯 Окупается за 1 день</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-green-600 mb-1">2 мин</div>
              <div className="text-gray-600 text-sm">на настройку</div>
              <div className="text-xs text-purple-600 mt-1">⚡ Работает сразу</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
              <div className="text-gray-600 text-sm">прием записей</div>
              <div className="text-xs text-green-600 mt-1">📈 +40% клиентов</div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm text-gray-500">Используют:</div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <span className="text-pink-600 text-xs font-bold">💄</span>
              </div>
              <span className="text-sm text-gray-600">1,200+ салонов</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">📚</span>
              </div>
              <span className="text-sm text-gray-600">800+ репетиторов</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xs font-bold">🚗</span>
              </div>
              <span className="text-sm text-gray-600">300+ автосервисов</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Устали от постоянных звонков и путаницы с записями?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Потеря клиентов</h3>
                    <p className="text-gray-600">Клиенты не дозваниваются и уходят к конкурентам</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Двойные записи</h3>
                    <p className="text-gray-600">Путаница в блокнотах и Excel-таблицах</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Время на администрирование</h3>
                    <p className="text-gray-600">Часы уходят на координацию вместо работы с клиентами</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">С Bookify всё просто:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Клиенты записываются сами 24/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Автоматические напоминания по SMS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">AI подбирает оптимальное расписание</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Рост выручки на 40% за месяц</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Всё для роста вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Не просто календарь записей, а комплексная система для увеличения прибыли
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>AI-ассистент</CardTitle>
                <CardDescription>
                  Умный помощник анализирует ваше расписание и предлагает оптимальные слоты
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Мобильное приложение</CardTitle>
                <CardDescription>PWA работает как нативное приложение на любом устройстве</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>SMS-уведомления</CardTitle>
                <CardDescription>Автоматические напоминания клиентам через российских операторов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle>Аналитика роста</CardTitle>
                <CardDescription>Отслеживайте конверсию, популярные услуги и прогнозы доходов</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle>Реферальная программа</CardTitle>
                <CardDescription>Получайте 20% с каждого приглашенного мастера пожизненно</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>Антифрод защита</CardTitle>
                <CardDescription>Система защиты от ложных записей и спама</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Прозрачные тарифы без скрытых платежей</h2>
            <p className="text-xl text-gray-600">Начните бесплатно, масштабируйтесь по мере роста</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="border-2 border-gray-200 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Старт</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  0₽
                  <span className="text-lg font-normal text-gray-600">/мес</span>
                </div>
                <CardDescription>Для знакомства с сервисом</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>30 записей в месяц</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Базовый календарь</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Мобильное приложение</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Техподдержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-transparent" variant="outline">
                  Начать бесплатно
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-500 relative shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500 text-white px-4 py-1">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Профи</CardTitle>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  490₽
                  <span className="text-lg font-normal text-gray-600">/мес</span>
                </div>
                <CardDescription>Для растущего бизнеса</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Безлимитные записи</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>AI-оптимизация расписания</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>SMS-напоминания (50 шт/мес)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Аналитика и отчеты</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Персональная страница</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Выбрать план</Button>
              </CardContent>
            </Card>

            {/* Business Plan */}
            <Card className="border-2 border-purple-500 relative">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Бизнес</CardTitle>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  990₽
                  <span className="text-lg font-normal text-gray-600">/мес</span>
                </div>
                <CardDescription>Для сети салонов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Всё из тарифа &quot;Профи&quot;</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>До 5 мастеров</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Безлимитные SMS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Интеграция с 1С</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Приоритетная поддержка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-purple-600 hover:bg-purple-700">Выбрать план</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">💳 Принимаем карты всех российских банков • ЮKassa • Тинькофф</p>
            <p className="text-sm text-gray-500">
              Все цены указаны с НДС. Первые 14 дней любого платного тарифа — бесплатно.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Social Proof */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мастера зарабатывают больше с первого дня</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Реальные результаты наших клиентов за первый месяц использования
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic text-blue-100">
                &quot;За месяц количество записей выросло в 2 раза. Клиенты записываются даже ночью! Доходы увеличились
                на 65,000₽.&quot;
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">А</span>
                </div>
                <div>
                  <div className="font-semibold">Анна Козлова</div>
                  <div className="text-sm text-blue-200">Салон &quot;Элегант&quot;, Москва</div>
                  <div className="text-xs text-yellow-300">+65,000₽ за месяц</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic text-blue-100">
                &quot;Больше не теряю клиентов из-за занятой линии. AI подсказывает лучшее время. Прибыль выросла на
                45%.&quot;
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">М</span>
                </div>
                <div>
                  <div className="font-semibold">Михаил Петров</div>
                  <div className="text-sm text-blue-200">Автосервис &quot;Мотор&quot;, СПб</div>
                  <div className="text-xs text-yellow-300">+120,000₽ за месяц</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mb-4 italic text-blue-100">
                &quot;Экономлю 3 часа в день на координации. Больше времени на учеников. Количество занятий увеличилось
                в 1.5 раза.&quot;
              </p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">Е</span>
                </div>
                <div>
                  <div className="font-semibold">Елена Смирнова</div>
                  <div className="text-sm text-blue-200">Репетитор английского, Казань</div>
                  <div className="text-xs text-yellow-300">+35,000₽ за месяц</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">+47%</div>
              <div className="text-sm text-blue-200">средний рост выручки</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">-73%</div>
              <div className="text-sm text-blue-200">пропущенных звонков</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm text-blue-200">прием записей</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm text-blue-200">довольных клиентов</div>
            </div>
          </div>

          {/* Video Testimonial CTA */}
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold mb-3">📹 Смотрите видео-отзывы мастеров</h3>
            <p className="text-blue-100 mb-4">Узнайте, как коллеги увеличили доходы с Bookify</p>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-blue-50 border-white">
              <span className="mr-2">▶️</span>
              Посмотреть видео-отзывы
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-800 animate-pulse">
              ⏰ Ограниченное предложение • До конца месяца
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Начните зарабатывать больше уже сегодня
            </h2>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Присоединяйтесь к 10,000+ мастеров, которые автоматизировали записи и увеличили прибыль на 47%
            </p>

            {/* Urgency Elements */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-3">
                🔥 Специальное предложение для новых пользователей
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-2xl font-bold text-red-600">50</div>
                  <div className="text-sm text-red-700">записей бесплатно</div>
                  <div className="text-xs text-gray-600">(вместо 30)</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-2xl font-bold text-red-600">30%</div>
                  <div className="text-sm text-red-700">скидка на первый месяц</div>
                  <div className="text-xs text-gray-600">промокод: START30</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-red-200">
                  <div className="text-2xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-red-700">персональная поддержка</div>
                  <div className="text-xs text-gray-600">первые 30 дней</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                🚀 Получить 50 записей бесплатно
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white border-2 hover:bg-gray-50">
                📞 Заказать звонок консультанта
              </Button>
            </div>

            {/* Trust & Guarantee */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span>Без привязки карты</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>Настройка за 2 минуты</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-purple-500" />
                <span>Гарантия результата</span>
              </div>
            </div>

            {/* Money Back Guarantee */}
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-800 mb-2">💰 Гарантия возврата денег</h3>
              <p className="text-green-700 text-sm">
                Если в течение 30 дней вы не увеличите количество записей минимум на 20% — мы вернем все деньги без
                вопросов
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bookify</span>
              </div>
              <p className="text-gray-400 mb-4">Сервис онлайн-записи для малого бизнеса России</p>
              <div className="text-sm text-gray-500">
                ИП Иванов И.И.
                <br />
                ИНН: 123456789012
                <br />
                Москва, 2024
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Интеграции
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обучение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Статус системы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@bookify.ru</li>
                <li>📱 +7 (495) 123-45-67</li>
                <li>💬 Telegram: @bookify_support</li>
                <li>🕐 Пн-Пт 9:00-18:00 МСК</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">© 2024 Bookify. Все права защищены.</div>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Условия использования
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Оферта
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

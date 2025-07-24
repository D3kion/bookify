"use client";

import { useState } from "react";
import {
  Calendar,
  ArrowRight,
  ArrowLeft,
  User,
  Scissors,
  Clock,
  CheckCircle,
  Mic,
  MicOff,
  Sparkles,
  MapPin,
} from "lucide-react";

import { Button, Input, Card, CardContent, Progress } from "@/shared/ui-kit";

interface OnboardingData {
  businessName: string;
  masterName: string;
  businessType: string;
  address: string;
  services: Array<{
    name: string;
    duration: number;
    price: number;
  }>;
  schedule: {
    [key: string]: {
      enabled: boolean;
      start: string;
      end: string;
    };
  };
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isListening, setIsListening] = useState(false);
  const [data, setData] = useState<OnboardingData>({
    businessName: "",
    masterName: "",
    businessType: "",
    address: "",
    services: [{ name: "Консультация", duration: 30, price: 1000 }],
    schedule: {
      monday: { enabled: true, start: "09:00", end: "18:00" },
      tuesday: { enabled: true, start: "09:00", end: "18:00" },
      wednesday: { enabled: true, start: "09:00", end: "18:00" },
      thursday: { enabled: true, start: "09:00", end: "18:00" },
      friday: { enabled: true, start: "09:00", end: "18:00" },
      saturday: { enabled: false, start: "10:00", end: "16:00" },
      sunday: { enabled: false, start: "10:00", end: "16:00" },
    },
  });

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const businessTypes = [
    { id: "beauty", name: "Салон красоты", icon: "💄" },
    { id: "tutor", name: "Репетиторство", icon: "📚" },
    { id: "auto", name: "Автосервис", icon: "🚗" },
    { id: "medical", name: "Медицина", icon: "⚕️" },
    { id: "fitness", name: "Фитнес", icon: "💪" },
    { id: "other", name: "Другое", icon: "⚡" },
  ];

  const weekDays = [
    { key: "monday", name: "Понедельник" },
    { key: "tuesday", name: "Вторник" },
    { key: "wednesday", name: "Среда" },
    { key: "thursday", name: "Четверг" },
    { key: "friday", name: "Пятница" },
    { key: "saturday", name: "Суббота" },
    { key: "sunday", name: "Воскресенье" },
  ];

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Голосовой ввод не поддерживается в вашем браузере");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "ru-RU";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      const newService = {
        name: transcript,
        duration: 60,
        price: 2000,
      };
      setData((prev) => ({
        ...prev,
        services: [...prev.services, newService],
      }));
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const addService = () => {
    setData((prev) => ({
      ...prev,
      services: [...prev.services, { name: "", duration: 60, price: 1000 }],
    }));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updateService = (index: number, field: string, value: any) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.map((service, i) => (i === index ? { ...service, [field]: value } : service)),
    }));
  };

  const removeService = (index: number) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.filter((_, i) => i !== index),
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      window.location.href = "/dashboard";
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Расскажите о себе</h2>
              <p className="text-gray-600">Основная информация для создания профиля</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Название бизнеса</label>
                <Input
                  placeholder="Салон красоты 'Элегант'"
                  value={data.businessName}
                  onChange={(e) => setData((prev) => ({ ...prev, businessName: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                <Input
                  placeholder="Анна Иванова"
                  value={data.masterName}
                  onChange={(e) => setData((prev) => ({ ...prev, masterName: e.target.value }))}
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Тип бизнеса</label>
                <div className="grid grid-cols-2 gap-3">
                  {businessTypes.map((type) => (
                    <Button
                      key={type.id}
                      variant={data.businessType === type.id ? "default" : "outline"}
                      onClick={() => setData((prev) => ({ ...prev, businessType: type.id }))}
                      className="h-12 justify-start"
                    >
                      <span className="mr-2">{type.icon}</span>
                      {type.name}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Адрес (необязательно)</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Москва, ул. Тверская, 1"
                    value={data.address}
                    onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value }))}
                    className="h-12 pl-10"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Scissors className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Ваши услуги</h2>
              <p className="text-gray-600">Добавьте услуги, которые вы предоставляете</p>
            </div>

            <div className="space-y-4">
              {data.services.map((service, index) => (
                <Card key={index} className="border-2 border-dashed border-gray-200">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Название услуги</label>
                        <Input
                          placeholder="Стрижка"
                          value={service.name}
                          onChange={(e) => updateService(index, "name", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Длительность (мин)</label>
                        <Input
                          type="number"
                          value={service.duration}
                          onChange={(e) => updateService(index, "duration", Number.parseInt(e.target.value))}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Цена (₽)</label>
                        <div className="flex">
                          <Input
                            type="number"
                            value={service.price}
                            onChange={(e) => updateService(index, "price", Number.parseInt(e.target.value))}
                          />
                          {data.services.length > 1 && (
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeService(index)}
                              className="ml-2 text-red-500 hover:text-red-700"
                            >
                              ✕
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <div className="flex gap-2">
                <Button variant="outline" onClick={addService} className="flex-1 bg-transparent">
                  + Добавить услугу
                </Button>
                <Button
                  variant="outline"
                  onClick={handleVoiceInput}
                  disabled={isListening}
                  className="px-4 bg-transparent"
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </Button>
              </div>

              {isListening && (
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="animate-pulse text-blue-600 mb-2">🎤</div>
                  <p className="text-blue-700 font-medium">Говорите название услуги...</p>
                </div>
              )}

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="font-medium text-purple-800">AI-подсказка</span>
                </div>
                <p className="text-sm text-purple-700">
                  Для салона красоты рекомендуем добавить: Маникюр (90 мин, 2500₽), Окрашивание (120 мин, 4000₽)
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Рабочее расписание</h2>
              <p className="text-gray-600">Укажите, когда вы принимаете клиентов</p>
            </div>

            <div className="space-y-3">
              {weekDays.map((day) => (
                <Card key={day.key} className="border">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <input
                          type="checkbox"
                          checked={data.schedule[day.key].enabled}
                          onChange={(e) =>
                            setData((prev) => ({
                              ...prev,
                              schedule: {
                                ...prev.schedule,
                                [day.key]: {
                                  ...prev.schedule[day.key],
                                  enabled: e.target.checked,
                                },
                              },
                            }))
                          }
                          className="w-4 h-4 text-blue-600"
                        />
                        <span className="font-medium text-gray-900 w-24">{day.name}</span>
                      </div>

                      {data.schedule[day.key].enabled && (
                        <div className="flex items-center space-x-2">
                          <Input
                            type="time"
                            value={data.schedule[day.key].start}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                schedule: {
                                  ...prev.schedule,
                                  [day.key]: {
                                    ...prev.schedule[day.key],
                                    start: e.target.value,
                                  },
                                },
                              }))
                            }
                            className="w-24"
                          />
                          <span className="text-gray-500">—</span>
                          <Input
                            type="time"
                            value={data.schedule[day.key].end}
                            onChange={(e) =>
                              setData((prev) => ({
                                ...prev,
                                schedule: {
                                  ...prev.schedule,
                                  [day.key]: {
                                    ...prev.schedule[day.key],
                                    end: e.target.value,
                                  },
                                },
                              }))
                            }
                            className="w-24"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Sparkles className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-medium text-green-800">AI-рекомендация</span>
              </div>
              <p className="text-sm text-green-700">
                Оптимальное время для записей: будние дни 10:00-19:00, суббота 11:00-17:00
              </p>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900">Всё готово!</h2>
              <p className="text-gray-600">Ваш профиль создан, можно принимать записи</p>
            </div>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-bold text-green-800 mb-4">Что дальше:</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">Персональная страница создана</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">30 бесплатных записей активированы</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-700">SMS-уведомления настроены</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
              <h3 className="font-bold mb-2">🎉 Бонус за регистрацию!</h3>
              <p className="text-blue-100 mb-4">
                Поделитесь ссылкой на запись с друзьями и получите +10 бесплатных записей
              </p>
              <div className="bg-white/20 p-3 rounded-lg">
                <p className="text-sm font-mono">bookify.ru/{data.businessName.toLowerCase().replace(/\s+/g, "-")}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">40</div>
                  <div className="text-sm text-gray-600">записей доступно</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">85%</div>
                  <div className="text-sm text-gray-600">профиль заполнен</div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Bookify
            </span>
          </div>

          {/* Progress */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>
                Шаг {currentStep} из {totalSteps}
              </span>
              <span>{Math.round(progress)}% завершено</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Content */}
        <Card className="border-0 shadow-xl">
          <CardContent className="p-8">{renderStep()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentStep === 1}
            className="flex items-center space-x-2 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Назад</span>
          </Button>

          <Button
            onClick={handleNext}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <span>{currentStep === totalSteps ? "Завершить" : "Далее"}</span>
            {currentStep !== totalSteps && <ArrowRight className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Calendar, ArrowLeft, Smartphone, Shield, Zap } from "lucide-react";

import { Button, Input, Card, CardContent, CardHeader } from "@/shared/ui-kit";

export default function AuthPage() {
  const [step, setStep] = useState<"phone" | "code">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleSendCode = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStep("code");
    setCountdown(60);
    setIsLoading(false);

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleVerifyCode = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Redirect to onboarding
    window.location.href = "/onboarding";
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.startsWith("8")) {
      return "+7" + numbers.slice(1);
    }
    if (numbers.startsWith("7")) {
      return "+" + numbers;
    }
    return "+7" + numbers;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {step === "phone" ? "Добро пожаловать!" : "Подтвердите номер"}
          </h1>
          <p className="text-gray-600">
            {step === "phone" ? "Начните принимать записи уже через 2 минуты" : `Код отправлен на ${phone}`}
          </p>
        </div>

        <Card className="border-0 shadow-xl">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">SMS-авторизация</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-600">Безопасно</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-purple-500" />
                <span className="text-sm text-gray-600">Быстро</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {step === "phone" ? (
              <>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Номер телефона</label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={phone}
                    onChange={(e) => setPhone(formatPhone(e.target.value))}
                    className="text-lg h-12"
                    maxLength={18}
                  />
                  <p className="text-xs text-gray-500">Мы отправим SMS с кодом подтверждения</p>
                </div>

                <Button
                  onClick={handleSendCode}
                  disabled={phone.length < 12 || isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? "Отправляем код..." : "Получить код"}
                </Button>

                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      условиями использования
                    </a>{" "}
                    и{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700">Код из SMS</label>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setStep("phone")}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1" />
                      Изменить номер
                    </Button>
                  </div>
                  <Input
                    type="text"
                    placeholder="0000"
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 4))}
                    className="text-center text-2xl h-16 tracking-widest"
                    maxLength={4}
                    autoFocus
                  />
                </div>

                <Button
                  onClick={handleVerifyCode}
                  disabled={code.length !== 4 || isLoading}
                  className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? "Проверяем код..." : "Подтвердить"}
                </Button>

                <div className="text-center">
                  {countdown > 0 ? (
                    <p className="text-sm text-gray-500">Повторная отправка через {countdown} сек</p>
                  ) : (
                    <Button variant="ghost" onClick={handleSendCode} className="text-blue-600 hover:text-blue-700">
                      Отправить код повторно
                    </Button>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-blue-600">30</div>
            <div className="text-xs text-gray-600">записей бесплатно</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-green-600">2 мин</div>
            <div className="text-xs text-gray-600">на настройку</div>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
            <div className="text-lg font-bold text-purple-600">24/7</div>
            <div className="text-xs text-gray-600">прием записей</div>
          </div>
        </div>
      </div>
    </div>
  );
}

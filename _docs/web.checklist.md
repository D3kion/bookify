### 🔚 Итоговый MVP фронтенд

1. **Авторизация** с ролевым доступом
2. **Управление воркспейсами** (создание/переключение)
3. **CRUD клиентов** с историей записей
4. **Календарь записей** с визуализацией слотов
5. **Система скидок** с промокодами
6. **Базовая аналитика** по записям
7. **РФ-специфика**: телефоны, даты, 152-ФЗ

---

### 🧩 Структура проекта (Feature-Sliced Design)

```bash
src/
├── public/
└── src/
    ├── app/              # Next.js App Router
    │
    ├── features/         # Бизнес-фичи
    │   ├── auth/         # Аутентификация
    │   ├── workspace/    # Управление воркспейсами
    │   ├── clients/      # Клиенты
    │   ├── appointments/ # Записи
    │   └── discounts/    # Скидки
    │
    ├── entities/         # Бизнес-сущности
    │   ├── client/       # Компоненты клиента
    │   ├── service/      # Компоненты услуг
    │   └── appointment/  # Компоненты записей
    │
    ├── widgets/          # Композитные виджеты
    │   ├── sidebar/      # Навигация
    │   ├── calendar/     # Виджет календаря
    │   └── stats/        # Виджет статистики
    │
    └── shared/           # Общие ресурсы
        ├── http/         # API клиент
        ├── ui-kit/       # UI компоненты (shadcn)
        └── config/       # Конфигурация
```

---

### ✅ Детальный чек-лист по неделям

#### Неделя 1: База и Workspace (30 часов)

- [~] **Инициализация (8ч)**

  - [x] Настройка Next.js + Bun + TS
  - [x] Конфиг Tailwind + shadcn/ui
  - [x] Настройка FSD структуры
  - [ ] CI/CD pipeline

- [ ] **Аутентификация (12ч)**

  - [ ] Страницы: /login, /register
  - [ ] Интеграция с Better Auth
  - [ ] Контекст сессии
  - [ ] Protected layout
  - [ ] Ролевой доступ (owner/admin/employee)

- [ ] **Workspace (10ч)**
  - [ ] Страница создания воркспейса
  - [ ] Виджет переключения воркспейсов
  - [ ] Настройки воркспейса (имя, адрес)
  - [ ] Приглашение сотрудников

#### Неделя 2: Клиенты и Каталог (35 часов)

- [ ] **Клиенты (15ч)**

  - [ ] Страница списка клиентов (таблица)
  - [ ] Карточка клиента (фильтры + поиск)
  - [ ] Форма создания/редактирования
  - [ ] История записей клиента
  - [ ] Валидация РФ телефонов

- [ ] **Услуги и Сотрудники (12ч)**

  - [ ] CRUD для услуг
  - [ ] CRUD для сотрудников
  - [ ] Привязка сотрудников к услугам
  - [ ] Виджет "Быстрый выбор услуги"

- [ ] **Календарь (8ч)**
  - [ ] Виджет календаря (react-big-calendar)
  - [ ] Просмотр слотов по дням/неделям
  - [ ] Визуализация занятых слотов
  - [ ] Локализация календаря (ru-RU)

#### Неделя 3: Записи и Скидки (40 часов)

- [ ] **Записи (20ч)**

  - [ ] Форма создания записи (клиент + услуга + сотрудник)
  - [ ] Проверка доступности слота
  - [ ] Страница расписания сотрудника
  - [ ] Отмена/перенос записей
  - [ ] Виджет "Ближайшие записи"

- [ ] **Скидки (12ч)**

  - [ ] Форма создания скидки (тип, значение, срок)
  - [ ] Применение скидки к записи
  - [ ] Виджет "Активные промокоды"
  - [ ] Ограничение скидок по ролям

- [ ] **Уведомления (8ч)**
  - [ ] Шаблоны SMS/email
  - [ ] История отправленных уведомлений
  - [ ] Настройки уведомлений для клиента
  - [ ] Тестовая отправка уведомлений

#### Неделя 4: Аналитика и Завершение (35 часов)

- [ ] **Аналитика (12ч)**

  - [ ] Виджет "Статистика записей"
  - [ ] График загруженности по дням
  - [ ] Конверсия записей
  - [ ] Экспорт в Excel

- [ ] **РФ-адаптация (10ч)**

  - [ ] Форматирование телефонов (+7 XXX-XXX-XX-XX)
  - [ ] Локализация дат/времени (MSK)
  - [ ] Политика конфиденциальности
  - [ ] Адаптация под мобильные устройства

- [ ] **Тестирование (13ч)**
  - [ ] E2E тесты ключевых сценариев (Cypress)
  - [ ] Юнит-тесты компонентов (Vitest)
  - [ ] Тестирование ролевого доступа
  - [ ] Перфоманс-тесты

---

### 🛠️ Технические детали реализации

#### 1. Аутентификация (Lucia + Next.js):

```tsx
// features/auth/model.ts
// TODO: use better-auth
export const login = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  setSession(response.data);
};

// widgets/sidebar/index.tsx
// TODO: use better-auth
const { user, workspace } = useSession();
return (
  <Avatar>
    <AvatarImage src={user.avatar} />
    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
  </Avatar>
);
```

#### 2. Календарь записей:

```tsx
// widgets/calendar/index.tsx
<Calendar
  localizer={localizer}
  events={appointments.map((a) => ({
    id: a.id,
    title: `${a.client.name} - ${a.service.name}`,
    start: new Date(a.startTime),
    end: new Date(a.endTime),
  }))}
  culture="ru"
/>
```

#### 3. Валидация форм (React Hook Form + Zod):

```tsx
// entities/client/ui/create-form.tsx
const formSchema = z.object({
  phone: z.string().regex(/^\+7\d{10}$/, "Неверный формат телефона"),
});

const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
});

<Form {...form}>
  <FormField
    control={form.control}
    name="phone"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Телефон</FormLabel>
        <Input placeholder="+79991234567" {...field} />
      </FormItem>
    )}
  />
</Form>;
```

#### 4. API-слой (Axios):

```ts
// shared/api/instance.ts
// TODO: use lightweight analog
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "ru-RU",
  },
});

api.interceptors.request.use((config) => {
  if (session.token) {
    config.headers.Authorization = `Bearer ${session.token}`;
  }
  return config;
});
```

---

#### 5. 📱 Адаптивные компоненты (shadcn + Tailwind)

```tsx
// entities/appointment/ui/card.tsx
const AppointmentCard = ({ appointment }) => (
  <Card className="md:max-w-3xl">
    <CardHeader>
      <CardTitle>{appointment.client.name}</CardTitle>
      <CardDescription>{format(appointment.date, "dd.MM.yyyy HH:mm", { locale: ru })}</CardDescription>
    </CardHeader>
    <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Badge variant="secondary">{appointment.service.name}</Badge>
      <Badge>{appointment.employee.name}</Badge>
      {appointment.discount && <Badge variant="outline">Скидка: {appointment.discount.value}%</Badge>}
    </CardContent>
  </Card>
);
```

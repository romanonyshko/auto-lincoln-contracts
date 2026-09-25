# @auto-lincoln/contracts

Спільні контракти (схеми та типи) для проєкту Auto Lincoln — використовуються і бекендом, і фронтендом, щоб формат запитів/відповідей був єдиним.

Схеми описані за допомогою [Zod](https://zod.dev), а TypeScript-типи виводяться з них через `z.infer`.

## Структура

```
auth/       — логін (LoginRequest, LoginResponse)
common/     — спільні схеми та константи
  api.ts      — префікс API, маршрути, назва auth-cookie
  errors.ts   — формат помилки API (ApiError)
  types.ts    — Id (uuid), Timestamps (createdAt / updatedAt)
products/   — контракти для товарів
users/      — контракти для користувачів
index.ts    — точка входу, реекспорт усіх контрактів
```

## Встановлення та збірка

```bash
npm install
npm run build
```

Збірка виконується через `tsc` у папку `dist/` (JS + `.d.ts` + source maps). Папка `dist/` не комітиться — вона генерується під час збірки.

## Використання

```ts
import {
  LoginRequestSchema,
  type LoginRequest,
  API_PREFIX,
  API_ROUTES,
} from "@auto-lincoln/contracts";

const body: LoginRequest = LoginRequestSchema.parse(req.body);
const url = `${API_PREFIX}${API_ROUTES.auth.login}`;
```

## Додавання нового контракту

1. Створи файл у відповідній папці (наприклад, `products/create-product.ts`).
2. Опиши Zod-схему та виведи з неї тип через `z.infer`.
3. Додай реекспорт у `index.ts` (з розширенням `.js`, бо проєкт використовує `nodenext`).
4. Запусти `npm run build`.

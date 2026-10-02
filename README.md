# @auto-lincoln/contracts

Спільні контракти (схеми та типи) для проєкту Auto Lincoln — використовуються і бекендом, і фронтендом, щоб формат запитів/відповідей був єдиним.

Схеми описані за допомогою [Zod](https://zod.dev), а TypeScript-типи виводяться з них через `z.infer`.

## Структура

```
auth/       — логін (LoginRequest, LoginResponse)
chat/       — події WebSocket-чату підтримки (ChatMessage, ClientChatEvent, ServerChatEvent)
common/     — спільні схеми та константи
  api.ts      — префікс API, REST-маршрути (API_ROUTES), WS-маршрути (WS_ROUTES), назва auth-cookie
  errors.ts   — формат помилки API (ApiError)
  types.ts    — Id (uuid), Timestamps (createdAt / updatedAt)
dashboard/  — відповідь GET /api/dashboard (DashboardResponse)
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

## WebSocket-чат

Шлях — `WS_ROUTES.chat` (`/ws/chat`). Він окремо від `API_ROUTES`, бо до нього не додається `API_PREFIX`. Повідомлення — JSON, дискримінований union за полем `type`.

| Напрям | Схема | Події |
| --- | --- | --- |
| клієнт → сервер | `ClientChatEventSchema` | `{ type: 'message:send', clientId, text }` — `clientId` uuid від клієнта, `text` після `trim` 1–1000 символів |
| сервер → клієнт | `ServerChatEventSchema` | `{ type: 'message:new', message: ChatMessage }`, `{ type: 'error', code: 'INVALID_JSON' \| 'VALIDATION_ERROR', message }` |

`ChatMessage` — `{ id, clientId?, author: 'user' | 'support', text, sentAt }`. `id` і `sentAt` задає сервер. `clientId` є лише у відповіді на повідомлення клієнта, у привітання від сервера його немає.

Вхідні дані перевіряються схемою (`ClientChatEventSchema.safeParse(data)`), а не типом: тип `ClientChatEvent` після компіляції зникає.

Як поводиться сервер (коди закриття, привітання) — у `auto-lincoln-api-nest/README.md`.

## Додавання нового контракту

1. Створи файл у відповідній папці (наприклад, `products/create-product.ts`).
2. Опиши Zod-схему та виведи з неї тип через `z.infer`.
3. Додай реекспорт у `index.ts` (з розширенням `.js`, бо проєкт використовує `nodenext`).
4. Запусти `npm run build`.

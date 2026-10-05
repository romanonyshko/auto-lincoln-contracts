import { z } from "zod"
import { IdSchema } from "../common/types.js"

export const ChatMessageSchema = z.object({
    id: IdSchema,
    clientId: z.uuid().optional(),
    author: z.enum(['user', 'support']),
    text: z.string(),
    sentAt: z.iso.datetime()
})

export const ClientChatEventSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('message:send'), clientId: z.uuid(),
        text: z.string()
            .trim()
            .min(1, { message: "Повідомлення не може бути порожнім" })
            .max(1000, { message: "Максимальна довжина — 1000 символів" }),
    }),
])

export const ServerChatEventSchema = z.discriminatedUnion('type', [
    z.object({
        type: z.literal('message:new'),
        message: ChatMessageSchema,
    }),

    z.object({
        type: z.literal('error'),
        code: z.enum(['INVALID_JSON', 'VALIDATION_ERROR']),
        message: z.string(),
        clientId: z.uuid().optional()
    }),
]);

export type ChatMessage = z.infer<typeof ChatMessageSchema>
export type ClientChatEvent = z.infer<typeof ClientChatEventSchema>
export type ServerChatEvent = z.infer<typeof ServerChatEventSchema>
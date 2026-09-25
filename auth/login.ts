import { z } from "zod";
import { IdSchema } from "../common/types.js";

export const LoginRequestSchema = z.object({
    email: z.email(),
    password: z.string().min(1)
})
export const LoginResponseSchema = z.object({
    id: IdSchema,
    email: z.email(),
    name: z.string()
})

export type LoginRequest = z.infer<typeof LoginRequestSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;
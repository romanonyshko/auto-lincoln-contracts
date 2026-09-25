import {  z } from "zod";

export const ApiErrorSchema = z.object({
    message: z.string(),
    statusCode: z.number().int().min(400).max(599),
    error: z.string().optional()
});

export type ApiError = z.infer<typeof ApiErrorSchema>;
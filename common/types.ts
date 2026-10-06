import { z } from "zod";

export const IdSchema = z.uuid();

export const TimestampsSchema = z.object({
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime()
})

export const IdParamsSchema = z.object({
    id: IdSchema
})

export type Id = z.infer<typeof IdSchema>;
export type Timestamps = z.infer<typeof TimestampsSchema>;
export type IdParams = z.infer<typeof IdParamsSchema>
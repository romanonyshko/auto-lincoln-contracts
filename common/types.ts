import { z } from "zod";

export const IdSchema = z.uuid();

export const TimestampsSchema = z.object({
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime()
})

export type Id = z.infer<typeof IdSchema>;
export type Timestamps = z.infer<typeof TimestampsSchema>;
import { z } from "zod";
import { IdSchema } from "../common/types.js";
import { paginated } from "../common/pagination.js";
import { PartSchema } from "./part.js";

export const PartsQuerySchema = z.object({
    category: IdSchema.optional(),
    make: IdSchema.optional(),
    model: IdSchema.optional(),
    engine: IdSchema.optional(),
    search: z.string().trim().transform(s => s === '' ? undefined : s).optional(),
    cursor: IdSchema.optional(),
    limit: z.coerce.number().int().min(1).max(100).default(20)
})

export const PartsResponseSchema = paginated(PartSchema)

export type PartsResponse = z.infer<typeof PartsResponseSchema>
export type PartsQuery = z.infer<typeof PartsQuerySchema>
import { z } from "zod";
import { IdSchema } from "../common/types.js";

export const EngineSchema = z.object({
    id: IdSchema,
    modelId: IdSchema,
    name: z.string().min(1)
})

export const EnginesResponseSchema = z.array(EngineSchema)

export type Engine = z.infer<typeof EngineSchema>
export type EnginesResponse = z.infer<typeof EnginesResponseSchema>

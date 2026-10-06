import { z } from "zod";
import { IdSchema } from "../common/types.js";

export const CarModelSchema = z.object({
    id: IdSchema,
    carmakerId: IdSchema,
    name: z.string().min(1)
})
export const CarModelsResponseSchema = z.array(CarModelSchema)

export type CarModel = z.infer<typeof CarModelSchema>
export type CarModelsResponse = z.infer<typeof CarModelsResponseSchema>

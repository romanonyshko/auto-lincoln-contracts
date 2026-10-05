import { z } from "zod";
import { IdSchema } from "../common/types.js";

export const CarmakerSchema = z.object({
    id: IdSchema,
    name: z.string().min(1)
})

export const CarmakersResponseSchema = z.array(CarmakerSchema)

export type Carmaker = z.infer<typeof CarmakerSchema>
export type CarmakersResponse = z.infer<typeof CarmakersResponseSchema>
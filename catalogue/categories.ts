import { z } from "zod";
import { IdSchema } from "../common/types.js";


export const CategorySchema = z.object({
    id: IdSchema,
    title: z.string().min(1),
    image: z.string(),
    order: z.number().int().nonnegative(),
})

export const CategoriesResponseSchema = z.array(CategorySchema)

export type Category = z.infer<typeof CategorySchema>
export type CategoriesResponse = z.infer<typeof CategoriesResponseSchema>

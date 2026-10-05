import { z } from "zod";
import { IdSchema } from "../common/types.js";

export const CurrencySchema = z.enum(['EUR', 'USD', 'UAH'])

export const PartSchema = z.object({
    id: IdSchema,
    categoryId: IdSchema,
    title: z.string().min(1),
    articleNumber: z.string().min(1),
    brand: z.string().min(1),
    price: z.number().nonnegative(),
    currency: CurrencySchema,
    inStock: z.number().int().nonnegative(),
    image: z.string().nullable(),
    createdAt: z.iso.datetime(),
    compatibleEngineIds: z.array(IdSchema),
})

export type Currency = z.infer<typeof CurrencySchema>
export type Part = z.infer<typeof PartSchema>
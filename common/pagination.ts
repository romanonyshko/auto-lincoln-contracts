import { z } from "zod";

export const paginated = <T extends z.ZodType>(item:T) => 
    z.object({
        items: z.array(item),
        nextCursor: z.string().nullable()
    })
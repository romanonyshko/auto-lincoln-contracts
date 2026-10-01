import { z } from "zod";
import { IdSchema } from "../common/types.js";


export const ReviewItemSchema = z.object({
    id: IdSchema,
    author: z.string(),
    postTitle: z.string(),
    text: z.string()
})

export const RequestCountsSchema = z.object({
    all: z.number().int().nonnegative(),
    pending: z.number().int().nonnegative(),
    approved: z.number().int().nonnegative(),
    spam: z.number().int().nonnegative(),
    trash: z.number().int().nonnegative()
})

export const GlanceStatsSchema = z.object({
    posts: z.number().int().nonnegative(),
    reviews: z.number().int().nonnegative(),
    pages: z.number().int().nonnegative()
});

export const NewsItemSchema = z.object({
    id:  IdSchema,
    title:  z.string(),
    publishedAt: z.iso.datetime()
})

export const StatCardSchema = z.object({
   id:  z.string(),
   label:  z.string(),
   value: z.string(),
   deltaPercent : z.number().optional()
})

export const ActivityPointSchema = z.object({
    month: z.string(),
    visitors:  z.number().int().nonnegative()
})

export const DashboardResponseSchema = z.object({
glance: GlanceStatsSchema,
latestNews:  NewsItemSchema.nullable(),
latestReview:  ReviewItemSchema.nullable(),
requests: RequestCountsSchema,
stats:  z.array(StatCardSchema),
activity:  z.array(ActivityPointSchema)
})

export type ReviewItem = z.infer<typeof ReviewItemSchema>
export type RequestCounts = z.infer<typeof RequestCountsSchema>
export type GlanceStats = z.infer<typeof GlanceStatsSchema>;
export type NewsItem = z.infer<typeof NewsItemSchema>;
export type StatCard = z.infer<typeof StatCardSchema>;
export type ActivityPoint = z.infer<typeof ActivityPointSchema>;
export type DashboardResponse = z.infer<typeof DashboardResponseSchema>;
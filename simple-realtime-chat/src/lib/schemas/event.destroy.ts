import z from "zod";

export const SDestroy = z.object({
    isDestroyed: z.literal(true)
})

export type TDestroy = z.infer<typeof SDestroy>
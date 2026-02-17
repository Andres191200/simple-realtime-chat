import z from "zod";

export const SMessage = z.object({
  sender: z.string().min(1).max(100),
  text: z.string().min(1).max(200),
});

export const SMessageSent = z.object({
            id: z.string(),
            createdAt: z.number(),
            roomId: z.string(),
            token: z.string().optional()
        })

export type TMessage = z.infer<typeof SMessage> & z.infer<typeof SMessageSent>;


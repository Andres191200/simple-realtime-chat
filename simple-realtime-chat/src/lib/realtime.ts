import { InferRealtimeEvents, Realtime } from "@upstash/realtime"
import z from "zod/v4"
import { redis } from "./redis"
import { SDestroy as destroySchema } from "./schemas/event.destroy"
import { SMessage as messageSchema, SMessageSent as messageSentSchema } from "./schemas/event.message"

const schema = {
    chat: {
        message: messageSchema.extend(messageSentSchema.shape),
        destroy: destroySchema
    }
}

export const realtime = new Realtime({ schema, redis })
export type RealtimeEvents = InferRealtimeEvents<typeof realtime>
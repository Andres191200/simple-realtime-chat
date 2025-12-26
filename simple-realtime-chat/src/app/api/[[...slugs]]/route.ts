import { redis } from "@/lib/redis";
import { Elysia } from "elysia";
import { nanoid } from "nanoid";

const ROOM_TTL_SECONDS = 600;

const createRoom = new Elysia({ prefix: "/rooms" }).post(
  "/create",
  async () => {
    const roomId = nanoid();

    redis.hset(`meta-${roomId}`, {
      connected: [],
    });

    await redis.expire(`meta-${roomId}`, ROOM_TTL_SECONDS);

    return { roomId };
  }
);

const app = new Elysia({ prefix: "/api" }).use(createRoom);

export const GET = app.fetch;
export const POST = app.fetch;
export type TApp = typeof app;

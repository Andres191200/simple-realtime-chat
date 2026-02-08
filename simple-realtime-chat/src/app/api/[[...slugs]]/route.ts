import { redis } from "@/lib/redis";
import { Elysia } from "elysia";
import { nanoid } from "nanoid";
import { authMiddleware } from "./auth";
import z from "zod";

const ROOM_TTL_SECONDS = 600;

const createRoom = new Elysia({ prefix: "/rooms" }).post(
  "/create",
  async () => {
    const roomId = nanoid();

    redis.hset(`meta-${roomId}`, {
      connected: [],
      createdAt: Date.now(),
    });

    await redis.expire(`meta-${roomId}`, ROOM_TTL_SECONDS);

    return { roomId };
  }
);

const messages = new Elysia({ prefix: "/messages"}).use(authMiddleware).post("/", ({body, auth }) => {
  const {sender, text} = body;


}, {body: z.object({
  sender: z.string().min(1).max(100),
  text: z.string().min(1).max(200),
})});

const app = new Elysia({ prefix: "/api" }).use(createRoom);

export const GET = app.fetch;
export const POST = app.fetch;
export type TApp = typeof app;

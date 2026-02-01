import { redis } from "@/lib/redis";
import { nanoid } from "nanoid";
import { NextRequest, NextResponse } from "next/server";

export const proxy = async (req: NextRequest) => {
  const pathname = req.nextUrl.pathname;

  const roomIdMatcher = pathname.match(/^\/room\/([^/]+)$/);

  if (!roomIdMatcher) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  const roomId = roomIdMatcher[1];

  const metaData = await redis.hgetall<{
    connected: string[];
    createdAt: number;
  }>(`meta-${roomId}`);

  if (!metaData || Object.keys(metaData).length === 0) {
    return NextResponse.redirect(new URL("/?error=room-not-found", req.url));
  }

  const existingToken = req.cookies.get("x-auth-token")?.value;

  if (existingToken && metaData.connected.includes(existingToken)) {
    return NextResponse.next();
  }

  if(metaData.connected.length > 2){
    return NextResponse.redirect(new URL("/?error=room-full", req.url))
  }

  const response = NextResponse.next();
  const token = nanoid();

  response.cookies.set("x-auth-token", token,{
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  console.log('id: ', token);
  await redis.hset(`meta-${roomId}`, {
    connected: [...metaData.connected, token],
  });

  return response;
};

export const config = {
  matcher: "/room/:path*",
};

"use client";
import { createContext, useContext } from "react";
import { useParams } from "next/navigation";

export const ROOM_TTL_SECONDS = 600;

type RoomContextType = {
  roomId: string;
  roomTtlSeconds: number;
};

const RoomContext = createContext<RoomContextType | null>(null);

export function useRoom() {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoom must be used within a RoomProvider");
  }
  return context;
}

type RoomProviderProps = {
  children: React.ReactNode;
};

export function RoomProvider({ children }: RoomProviderProps) {
  const params = useParams<{ roomId: string }>();
  const roomId = params.roomId;

  return (
    <RoomContext.Provider value={{ roomId, roomTtlSeconds: ROOM_TTL_SECONDS }}>
      {children}
    </RoomContext.Provider>
  );
}

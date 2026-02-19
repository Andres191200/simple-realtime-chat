"use client";
import styles from "./styles.module.scss";
import RoomHeader from "./components/room-header/RoomHeader";
import RoomChat from "./components/room-chat/RoomChat";
import { RoomProvider } from "./context/RoomContext";

export default function Room() {
  return (
    <RoomProvider>
      <div className={styles.roomPage}>
        <RoomHeader />
        <div className="separator"/>
        <RoomChat />
      </div>
    </RoomProvider>
  );
}

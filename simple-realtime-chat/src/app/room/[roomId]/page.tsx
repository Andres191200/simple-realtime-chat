"use client";
import styles from "./styles.module.scss";
import RoomHeader from "./components/room-header/RoomHeader";



export default function Room() {
  return (
    <div className={styles.roomPage}>
      <RoomHeader />
    </div>
  );
}

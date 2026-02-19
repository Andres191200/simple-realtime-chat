"use client";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { useRoom } from "../../context/RoomContext";

const WARNING_THRESHOLD_SECONDS = 180;

function copyRoomId() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
  toast.success("Room ID copied to clipboard");
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const formattedTime = `${minutes.toString().padStart(2, "0")}:${(seconds%60)
    .toString()
    .padStart(2, "0")}`;
  return formattedTime;
}

export default function RoomHeader() {
  const { roomId, roomTtlSeconds } = useRoom();
  const [timer, setTimer] = useState(roomTtlSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.roomHeaderComponent}>
      <section className={styles.roomInfo}>
        <div>
          <span>ROOM</span>
          <h6 className={styles.roomId}>{roomId}</h6>
        </div>
        <button onClick={copyRoomId}>copy</button>
      </section>
      <section className={styles.roomTimer}>
        <span className={`${styles.remainingTime} ${timer <= WARNING_THRESHOLD_SECONDS ? styles.warning : ""}`}>
          SELF DESTRUCT: {formatTime(timer)}
        </span>
        <button className={styles.destroyButton} onClick={() => {}}>DESTROY NOW</button>
      </section>
    </div>
  );
}

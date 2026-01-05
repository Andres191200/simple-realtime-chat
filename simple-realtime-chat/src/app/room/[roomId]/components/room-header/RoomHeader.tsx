"use client";
import toast from "react-hot-toast";
import styles from "./styles.module.scss";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type TUrlParams = {
  roomId: string;
};

function copyRoomId() {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
  toast.success("Room ID copied to clipboard");
}

export default function RoomHeader() {
  const params: TUrlParams = useParams();
  const roomId = params.roomId;
  const [timerRef, setTimerRef] = useState(600)

  useEffect(() => {
    // create a timer from 10 minutes to 0
    const timer = setInterval(() => {
        setTimerRef((prev) => {
            if(prev === 0) {
                clearInterval(timer);
                return 0;
            }
            return prev - 1;
        })
    }, 1000);
  
    return () => {
      clearInterval(timer);
    };
  })
  
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
        <span  className={`${styles.remaininTime}`}>Remaining time: {timerRef}</span>
      </section>
    </div>
  );
}

"use client";
import { useParams } from "next/navigation";
import styles from "./styles.module.scss";
import toast from "react-hot-toast";

type TParams = {
  roomId: string;
};

function copyRoomId(){
  const currentUrl = window.location.href;
  navigator.clipboard.writeText(currentUrl);
  toast.success('Room ID copied to clipboard');
}

export default function Room() {
  const params: TParams = useParams();
  const roomId = params.roomId;
  return (
    <div className={styles.roomPage}>
      <div className={styles.roomHeader}>
        <div className={styles.roomInfo}>
          <span>ROOM</span>
          <h6 className={styles.roomId}>{roomId}</h6>
        </div>
        <button onClick={copyRoomId}>copy</button>
      </div>
    </div>
  );
}

"use client";
import { useEffect, useState } from "react";
import useLocalStorage from "./shared/hooks/useLocalStorage";
import styles from "./styles.module.scss";
import { generateUniqueUsername } from "./shared/utils/user";
import { useMutation } from "@tanstack/react-query";
import { edenClient } from "@/lib/eden-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const USERNAME_KEY = "username" as const;

export default function Home() {
  const { setItem, getItem } = useLocalStorage();
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();
  const { mutate: createRoom, isPending } = useMutation({
    mutationFn: async () => {
      const res = await edenClient.rooms.create.post();

      if(res.status === 200){
        toast.success("Room created successfully");
        router.push(`/room/${res.data?.roomId}`);
      }
    },
  });

  useEffect(() => {
    function setInitialUserName() {
      const userName = getItem(USERNAME_KEY);
      if (!userName) {
        const username = generateUniqueUsername();
        setItem(USERNAME_KEY, username);
        setUserName(username);
      } else {
        setUserName(userName as string);
      }
    }
    setInitialUserName();
  }, [getItem, setItem]);

  return (
    <div className={styles.homePage}>
      <section>
        <div className={styles.createRoomContainer}>
          <div>
            <h5 className={styles.createRoomText}>Welcome </h5>
            <h5 className={styles.username}>{userName}</h5>
          </div>
          <div>
            <span className={styles.createRoomDescription}>To an anonymous 10-minute chat</span>
          </div>
          <div className={styles.createRoomWarningMessageBox}>
            <span>
              Be careful! the room will be self-destroyed{" "}
              <span className={`bold ${styles.bold}`}>after 10 minutes</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              createRoom();
            }}
          >
            {/* TODO: DISABLE BUTTON WHEN IS LOADING */}
            {isPending ? 'Creating...'  : 'Create room'}
          </button>
        </div>
      </section>
    </div>
  );
}

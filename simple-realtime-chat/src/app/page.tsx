"use client";
import { useEffect, useState } from "react";
import useLocalStorage from "./shared/hooks/useLocalStorage";
import styles from "./styles.module.scss";

const USERNAME_KEY = "username" as const;

export default function Home() {
  const { setItem, getItem } = useLocalStorage();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    function setInitialUserName() {
      const userName = getItem(USERNAME_KEY);
      if (!userName) {
        // ASSIGN RANDOM NAME WITH UUID
        const username = "anonymous-walrus-2-e3c20s";
        setItem(USERNAME_KEY, username);
        setUserName(username);
      } else {
        setUserName(userName as string);
      }
    }
    setInitialUserName();
  }, []);

  return (
    <div className={styles.homePage}>
      <section>
        <div className={styles.createRoomContainer}>
          <div>
            <h5 className={styles.createRoomText}>Welcome </h5>
            <h5 className={styles.username}>{userName}</h5>
          </div>
          <div className={styles.createRoomWarningMessageBox}>
            <span>
              Be careful! the room will be self-destroyed{" "}
              <span className={`bold ${styles.bold}`}>after 10 minutes</span>
            </span>
          </div>
          <button type="button">Create room</button>
        </div>
      </section>
    </div>
  );
}

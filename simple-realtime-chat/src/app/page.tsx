import styles from "./styles.module.scss";
export default function Home() {
  return (
    <div className={styles.homePage}>
      <section>
        <div className={styles.createRoomContainer}>
          <div>
            <h5 className={styles.createRoomText}>Welcome </h5>
            <h5 className={styles.username}>anonymous-walrus-e3c20s</h5>
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

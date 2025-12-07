import styles from "./styles.module.scss";
export default function Home() {
  return (
    <div className={styles.homePage}>
      <section>
        <div className={styles.createRoomContainer}>
          <h5 className={styles.createRoomText}>Create a room to chat!</h5>
          <input type="text"></input>
        </div>
      </section>
    </div>
  );
}

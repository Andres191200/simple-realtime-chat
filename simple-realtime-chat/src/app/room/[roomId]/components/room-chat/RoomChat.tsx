"use client";
import styles from "./styles.module.scss";
import { sendMessage } from "@/app/room/actions/send-message";
export default function RoomChat() {
  return (
    <div className={styles.roomChatComponent}>
        <section className={styles.chatBox}></section>
        <section className={styles.chatBottom}>
          <form action={sendMessage}>
            <input className={styles.chatInput} type="text" name="message" placeholder="Type your message"/>
            <button type="submit" className={styles.sendButton}>Send</button>
          </form>
        </section>
    </div>
  )
}

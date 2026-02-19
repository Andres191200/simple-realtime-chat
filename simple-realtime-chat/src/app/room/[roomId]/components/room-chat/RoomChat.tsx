"use client";
import { useMutation } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { sendMessage } from "@/app/room/actions/send-message";
import { edenClient } from "../../../../../lib/eden-client";
export default function RoomChat() {
  const { } = useMutation({mutationFn: async (_) => {
    await edenClient.messages.post({
      sender: username,
      text: message,
    }, {query: roomId})
  })
  return (
    <div className={styles.roomChatComponent}>
        <section className={styles.chatBox}></section>
        <section className={styles.chatBottom}>
          <form action={sendMessage}>
            <input className={styles.chatInput} type="text" name="message" placeholder="Type your message"/>
            <button type="submit" className={styles.sendButton} onClick={() => {
               
            }}>Send</button>
          </form>
        </section>
    </div>
  )
}

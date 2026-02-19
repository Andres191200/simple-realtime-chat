"use client";
import { useMutation } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { sendMessage } from "@/app/room/actions/send-message";
import { edenClient } from "../../../../../lib/eden-client";
import { useRoom } from "../../context/RoomContext";

const TSendMessage = {
  username: String,
  text: String,
}

export default function RoomChat() {
  const { roomId } = useRoom();
  const { mutate: sendMessage } = useMutation({mutationFn: async ({username, text}: {username: string, text: string}) => {
    await edenClient.messages.post({
      sender: username,
      text: message,
    }, {query: { roomId }})
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

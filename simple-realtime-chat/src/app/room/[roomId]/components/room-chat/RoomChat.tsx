"use client";
import { useMutation } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { useRoom } from "../../context/RoomContext";
import { FormEvent } from "react";
import useLocalStorage from "../../../../shared/hooks/useLocalStorage";
import { edenClient } from "../../../../../lib/eden-client";

type TSendMessage = {
  username: string;
  text: string;
};

export default function RoomChat() {
  const { roomId } = useRoom();
  const { getItem } = useLocalStorage();

  const { mutate: sendMessage, isPending } = useMutation({
    mutationFn: async ({ username, text }: TSendMessage) => {
      await edenClient.messages.post(
        {
          sender: username,
          text: text,
        },
        { query: { roomId } },
      );
    },
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text = formData.get("message") as string;
    const username = getItem("username") as string;

    if (text.trim()) {
      sendMessage({ username, text });
      e.currentTarget.reset();
    }
  }

  return (
    <div className={styles.roomChatComponent}>
      <section className={styles.chatBox}></section>
      <section className={styles.chatBottom}>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.chatInput}
            type="text"
            name="message"
            placeholder="Type your message"
            disabled={isPending}
          />
          <button type="submit" className={styles.sendButton}>
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

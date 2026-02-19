"use server";

import { edenClient } from "../../../lib/eden-client";

type TSendMessage = {
  username: string;
  text: string;
  roomId: string;
};

async function sendRoomMessage({ username, text, roomId }: TSendMessage) {
  await edenClient.messages.post(
    {
      sender: username,
      text: text,
    },
    { query: { roomId } },
  );
}

export { sendRoomMessage };

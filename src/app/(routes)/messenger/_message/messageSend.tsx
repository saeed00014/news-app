"use client";
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import SendBar from "@/components/sendBar";
import { baseURL } from "@/axios/axios";
import { ChatRoomContext } from "@/context/context";
import AttachedMessageBar from "./attachedMessageBar";
import {
  ChatActionMessage,
  MessageSendType,
} from "@/types/types";

const useSend = (url: string) => {
  const [sendValue, setSendValue] = useState("");
  const { actionMessage, setNewMessage, setActionMessage } =
    useContext(ChatRoomContext);

  const sendResult = useMutation({
    mutationFn: async (data: MessageSendType) => {
      const response = await baseURL.post(url, data);
      if (response.data?.insertId) {
        const id = response.data.insertId;
        const user_id = response.data.user_id;
        const message = {
          id: id,
          user_id: user_id,
          text: data?.text,
          news: data?.news,
          image: data?.image,
          attached_id: data?.attached_id,
          attached: data?.attached,
        };
        setActionMessage({} as ChatActionMessage);
        setNewMessage({ action: "post", message: message });
      }
      return response.data.insertId;
    },
  });

  let attached = null;
  let attached_id: any = null;
  if (actionMessage.action === "share") {
    attached = actionMessage.message.text;
    attached_id = actionMessage.message.id;
  }

  const onSend = (e: any) => {
    setSendValue("");
    sendResult.mutate({
      text: e.target.text.value,
      news: null,
      image: null,
      attached_id: attached_id,
      attached: attached,
    });
  };

  return { onSend, sendValue, setSendValue };
};

const MessageSend = () => {
  const { actionMessage } = useContext(ChatRoomContext);

  const chat_id = useParams()?.id;

  const { onSend, sendValue, setSendValue } = useSend(
    `/messages?chat_id=${chat_id}`
  );

  return (
    <>
      {actionMessage?.action === "share" && <AttachedMessageBar />}
      <SendBar
        onSubmit={onSend}
        sendValue={sendValue}
        setSendValue={setSendValue}
      />
    </>
  );
};

export default MessageSend;

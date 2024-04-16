"use client";
import { useContext, useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import SendBar from "@/components/sendBar";
import { baseURL } from "@/axios/axios";
import { ChatRoomContext } from "@/context/context";
import AttachedMessageBar from "./attachedMessageBar";
import { MessageSendType } from "@/types/types";

const useSend = (url: string) => {
  const { actionMessage, setNewMessage, user } = useContext(ChatRoomContext);

  const sendResult = useMutation({
    mutationFn: async (data: MessageSendType) => {
      const response = await baseURL.post(url, data);
      if (response.data?.insertId) {
        const id = response.data.insertId;
        const message = {
          id: id,
          user_id: user.id,
          text: data?.text,
          news: data?.news,
          image: data?.image,
          attached_id: data?.attached_id,
          attached: data?.attached,
        };
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

  const onSend = (getValues: Function) => {
    sendResult.mutate({
      text: getValues("text"),
      news: null,
      image: null,
      attached_id: attached_id,
      attached: attached,
    });
  };

  return { onSend, sendResult };
};

const usePut = (url: string) => {
  const { actionMessage, setNewMessage } = useContext(ChatRoomContext);

  const putResult = useMutation({
    mutationFn: async (data: { text: string }) => {
      const response = await baseURL.put(url, data);
      const message = {
        id: actionMessage.message?.id,
        user_id: actionMessage.message?.user_id,
        text: data?.text,
        news: actionMessage.message?.news,
        image: actionMessage.message?.image,
        attached_id: actionMessage.message?.attached_id,
        attached: actionMessage.message?.attached,
      };
      setNewMessage({ action: "put", message: message });
      return response.data.result;
    },
  });

  const onPut = (getValues: Function) => {
    putResult.mutate({
      text: getValues("text"),
    });
  };

  return { onPut, putResult };
};

const MessageSend = () => {
  const { actionMessage } = useContext(ChatRoomContext);

  const chat_id = useParams()?.id;

  const { onSend } = useSend(`/messages?chat_id=${chat_id}`);

  const { onPut } = usePut(
    `/messages?message_id=${actionMessage?.message?.id}`
  );

  if (actionMessage?.action === "put") {
    return <SendBar onSubmit={onPut} value={actionMessage.message.text} />;
  }

  return (
    <>
      {actionMessage?.action === "share" && <AttachedMessageBar />}
      <SendBar onSubmit={onSend} value={null} />
    </>
  );
};

export default MessageSend;

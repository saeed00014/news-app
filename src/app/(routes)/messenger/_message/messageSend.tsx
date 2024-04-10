"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import SendBar from "@/components/sendBar";
import { baseURL } from "@/axios/axios";

const useSend = (url: string) => {
  const [sendValue, setSendValue] = useState("");

  type Props = {
    text: string | null,
    news: string | null,
    image: string | null
  }

  const sendResult = useMutation({
    mutationFn: async (data : Props) => {
      const response = await baseURL.post(url, data);
      return response.data.result;
    },
  });

  const onSubmit = (getValues: Function) => {
    sendResult.mutate({
      text: getValues("text"),
      news: null, 
      image: null
    });
  };

  return { sendValue, onSubmit, sendResult };
};

const MessageSend = () => {
  const chat_id = useParams().id
  const { sendValue, onSubmit, sendResult } = useSend(
    `/messages?chat_id=${chat_id}`
  );
  return <SendBar onSubmit={onSubmit} />;
};

export default MessageSend;

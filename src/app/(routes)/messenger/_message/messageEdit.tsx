"use client";
import { useContext, useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import SendBar from "@/components/sendBar";
import { baseURL } from "@/axios/axios";
import { ChatRoomContext } from "@/context/context";
import { ChatActionMessage } from "@/types/types";
import CloseBtn from "@/components/closeBtn";
import persian from "@/assets/data";

const usePut = (url: string) => {
  const [putValue, setPutValue] = useState("");
  const { actionMessage, setNewMessage, setActionMessage } =
    useContext(ChatRoomContext);

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
      setActionMessage({} as ChatActionMessage);
      setNewMessage({ action: "put", message: message });
      return response.data.result;
    },
  });

  const onPut = (e: any) => {
    setPutValue("");
    putResult.mutate({
      text: e.target.text.value,
    });
  };

  return { onPut, putValue, setPutValue };
};

const MessageEdit = () => {
  const { actionMessage, setActionMessage } = useContext(ChatRoomContext);

  const { onPut, putValue, setPutValue } = usePut(
    `/messages?message_id=${actionMessage?.message?.id}`
  );

  useEffect(() => {
    setPutValue(actionMessage?.message?.text || "");
  }, [actionMessage]);

  return (
    <div className="relative">
      <SendBar
        onSubmit={onPut}
        sendValue={putValue}
        setSendValue={setPutValue}
      />
      <div
        onClick={() => setActionMessage({} as ChatActionMessage)}
        className="absolute left-4 top-[.4rem] flex bg-ash text-ship px-2 py-[.1rem] rounded-full gap-2 cursor-pointer"
      >
        <CloseBtn setEvent={() => {}} classNames="[&>*]:p-0 pt-1" />
        <span>{persian.editMessage}</span>
      </div>
    </div>
  );
};

export default MessageEdit;

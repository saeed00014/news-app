import { baseURL } from "@/axios/axios";
import { ChatRoomContext } from "@/context/context";
import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";

const useDeleteMessage = () => {
  const { choosedMessage } = useContext(ChatRoomContext);

  const deleteResult = useMutation({
    mutationFn: async (message_id: number) => {
      const response = await baseURL.delete(
        `/messages?message_id=${message_id}`
      );
      return response.data.result;
    },
  });

  const handleClick = () => {
    deleteResult.mutate(choosedMessage.id);
  };

  return { handleClick };
};

const MessageDelete = () => {
  const { handleClick } = useDeleteMessage();

  return (
    <div
      id="messagesOptions"
      className="flex w-full items-center justify-center h-full"
      onClick={handleClick}
    >
      <FaTrash className="text-[1.1rem] w-10 pointer-events-none" />
    </div>
  );
};

export default MessageDelete;

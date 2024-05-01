import { baseURL } from "@/axios/axios";
import ResultUserChoose from "@/components/share/resultUserChoose";
import { PreRenderResultUser, ResultUser } from "@/components/ui/resultUser";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type Props = {
  chatInfo: { id: number; targetUser_id: number };
  type?: string | undefined;
};

const Chat = ({ chatInfo, type }: Props) => {
  const userInfo = useQuery({
    queryKey: [chatInfo.id],
    queryFn: async () => {
      const response = await baseURL.get(
        `/users/userInfo/${chatInfo.targetUser_id}`
      );
      return response.data.result;
    },
  });

  const handleClick = () => {
    location.replace(`/messenger/${chatInfo.id}`)
  }

  if (userInfo.isPending) {
    return <PreRenderResultUser />;
  }

  if (type === "choose") {
    return <ResultUserChoose user={userInfo.data[0]} />;
  }

  return (
    <div onClick={handleClick} >
      <ResultUser user={userInfo.data[0]} />
    </div>
  );
};

export default Chat;

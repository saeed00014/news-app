import { baseURL } from "@/axios/axios";
import { PreRenderResultUser, ResultUser } from "@/components/ui/resultUser";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type Props = { chatInfo: { id: number; targetUser_id: number } };

const Chat = ({ chatInfo }: Props) => {
  const userInfo = useQuery({
    queryKey: [chatInfo.id],
    queryFn: async () => {
      const response = await baseURL.get(
        `/users/userInfo/${chatInfo.targetUser_id}`
      );
      return response.data.result;
    },
  });

  if (userInfo.isPending) {
    return <PreRenderResultUser />;
  }

  return (
    <Link href={`/messenger/${chatInfo.id}`}>
      <ResultUser user={userInfo.data[0]} />
    </Link>
  );
};

export default Chat;

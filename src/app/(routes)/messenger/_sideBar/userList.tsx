import { baseURL } from "@/axios/axios";
import LoadingSpin from "@/components/loadingSpin";
import NoResult from "@/components/ui/noResult";
import { ResultUser, ResultUserList } from "@/components/ui/resultUser";
import { UserInfoType } from "@/types/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useErrorBoundary } from "react-error-boundary";

type Props = {
  searchResult: UseMutationResult<any, Error, void, unknown>;
  searchValue: string;
};

const useChatInfo = () => {
  const { showBoundary } = useErrorBoundary();
  const router = useRouter();

  const checkChat = useMutation({
    mutationFn: async (user: UserInfoType) => {
      try {
        const response = await baseURL.get(
          `/chats/checkChat?targetUser_id=${user.id}`
        );
        if (!response.data?.result[0]?.id) {
          const response2 = await baseURL.post("/chats", user);
          if (response2.data.insertId) {
            router.push(`/messenger/${response2.data.insertId}`);
          }
          return response2.data.insertId;
        }
        router.push(`/messenger/${response.data.result[0].id}`);
        return response.data.result[0].id;
      } catch (error) {
        showBoundary(error);
      }
    },
  });

  const handleClick = (user: UserInfoType) => {
    checkChat.mutate(user);
  };

  return { handleClick };
};

const UserList = ({ searchResult, searchValue }: Props) => {
  const { handleClick } = useChatInfo();

  if (!searchValue) {
    return <></>;
  }

  if (searchResult.isPending) {
    return (
      <div className="flex justify-center w-full">
        <LoadingSpin />
      </div>
    );
  }

  if (searchResult.data?.result) {
    return (
      <ResultUserList>
        {searchResult.data.result.map((user: UserInfoType) => {
          return (
            <div onClick={() => handleClick(user)} key={user.id}>
              <ResultUser user={user} />
            </div>
          );
        })}
      </ResultUserList>
    );
  }

  return <NoResult classNames="flex justify-center w-full" />;
};

export default UserList;

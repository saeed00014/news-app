import LoadingSpin from "@/components/loadingSpin";
import NoResult from "@/components/ui/noResult";
import { ResultUser, ResultUserList } from "@/components/ui/resultUser";
import { UserInfoType } from "@/types/types";
import { UseMutationResult } from "@tanstack/react-query";

type Props = {
  searchResult: UseMutationResult<any, Error, void, unknown>;
  searchValue: string;
};

const UserList = ({ searchResult, searchValue }: Props) => {
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

  if (searchResult.data) {
    return (
      <ResultUserList>
        {searchResult.data.map((user: UserInfoType) => {
          return (
            <div key={user.id}>
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

import BackBtn from "@/components/backBtn";
import LoadingSpin from "@/components/loadingSpin";
import SearchBar from "@/components/searchBar";
import NoResult from "@/components/ui/noResult";
import { ResultUser, ResultUserList } from "@/components/ui/resultUser";
import UseSearch from "@/hooks/useSearch";
import { merge } from "@/lib/utils/merge";
import UserList from "./userList";

type Props = {
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchActive: boolean;
  classNames?: string;
};

const UserSearch = ({
  setIsSearchActive,
  isSearchActive,
  classNames,
}: Props) => {
  const { getsearchValue, searchResult, searchValue } = UseSearch(
    "/users/search?username"
  );
  return (
    <div
      className={merge(
        `absolute top-0 bottom-0 flex flex-col h-full px-1 py-3 min-w-[250px] gap-3 bg-ship duration-150 border-l  ${
          isSearchActive ? "right-0" : " -right-[300px]"
        }`,
        classNames
      )}
    >
      <div className="flex">
        <BackBtn setEvent={setIsSearchActive} classNames="scale-110 pr-1" />
        <SearchBar onChange={getsearchValue} classNames="px-2" />
      </div>
      <UserList searchResult={searchResult} searchValue={searchValue} />
    </div>
  );
};

export default UserSearch;

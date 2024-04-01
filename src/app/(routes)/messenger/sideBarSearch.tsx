import BackBtn from "@/components/backBtn";
import CloseBtn from "@/components/closeBtn";
import SearchBar from "@/components/searchBar";
import { ResultUser, ResultUserList } from "@/components/ui/resultUser";
import { merge } from "@/lib/utils/merge";

type Props = {
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchActive: boolean;
  classNames?: string;
};

const SideBarSearch = ({
  setIsSearchActive,
  isSearchActive,
  classNames,
}: Props) => {
  const user = {
    id: 2,
    firstname: "string",
    username: "string",
    image: null,
  };
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
        <BackBtn setEvent={setIsSearchActive} />
        <SearchBar />
      </div>
      <ResultUserList>
        <ResultUser user={user} />
        <ResultUser user={user} />
        <ResultUser user={user} />
        <ResultUser user={user} />
      </ResultUserList>
    </div>
  );
};

export default SideBarSearch;

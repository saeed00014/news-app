import UseSearch from "@/hooks/useSearch";
import CloseBtn from "../closeBtn";
import SearchBar from "../searchBar";
import ShareBody from "./shareBody";

type Props = {
  setIsShareActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShareHead = ({ setIsShareActive }: Props) => {
  const { getsearchValue, searchResult, searchValue } = UseSearch(
    "/users/search?username"
  );

  return (
    <>
      <div className="flex justify-between px-3 py-2 w-full">
        <SearchBar onChange={getsearchValue} classNames="[&>label]:right-3" />
        <CloseBtn setEvent={setIsShareActive} />
      </div>
      <div className="flex flex-col h-[50vh] max-h-[25rem] bg-ash gap-1">
        <div className="flex flex-col p-2 gap-2 overflow-y-auto">
          <ShareBody searchResult={searchResult} searchValue={searchValue} />
        </div>
      </div>
    </>
  );
};

export default ShareHead;

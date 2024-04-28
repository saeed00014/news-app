"use client";
import SearchBar from "@/components/searchBar";
import ChatList from "./chatList";
import LoadingSpin from "@/components/loadingSpin";
import UseSearch from "@/hooks/useSearch";
import persian from "@/assets/data";

const ChatSearch = () => {
  const { getsearchValue, searchResult, searchValue } = UseSearch(
    "/chats/search?targetUsername"
  );
  return (
    <>
      <SearchBar
        onChange={getsearchValue}
        search={persian.chat}
        classNames="px-2"
      />
      {searchValue && (
        <div className="absolute top-[65px] left-0 right-0 bottom-0 h-[initial] bg-ship">
          {searchResult.isPending ? (
            <div className="flex justify-center w-full">
              <LoadingSpin />
            </div>
          ) : (
            <ChatList
              user={searchResult?.data?.user}
              searchResult={searchResult?.data?.result}
            />
          )}
        </div>
      )}
    </>
  );
};

export default ChatSearch;

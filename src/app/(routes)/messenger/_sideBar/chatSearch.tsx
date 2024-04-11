"use client";
import SearchBar from "@/components/searchBar";
import ChatList from "./chatList";
import LoadingSpin from "@/components/loadingSpin";
import UseSearch from "@/hooks/useSearch";

const ChatSearch = () => {
  const { getsearchValue, searchResult, searchValue } = UseSearch(
    "/chats/search?targetUsername"
  );

  return (
    <>
      <SearchBar onChange={getsearchValue} classNames="px-2" />
      {searchValue && (
        <div className="absolute top-[65px] left-0 right-0 bottom-0 h-[initial] bg-ship">
          {searchResult.isPending ? (
            <div className="flex justify-center w-full">
              <LoadingSpin />
            </div>
          ) : (
            <ChatList searchResult={searchResult.data} />
          )}
        </div>
      )}
    </>
  );
};

export default ChatSearch;

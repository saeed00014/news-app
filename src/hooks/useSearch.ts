import { baseURL } from "@/axios/axios";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const UseSearch = (url: string) => {
  const [searchValue, setSearchValue] = useState("");
  const searchResult = useMutation({
    mutationFn: async (searchValue) => {
      const response = await baseURL.get(
        `${url}=${searchValue}`
      );
      return response.data;
    },
  });
  const getsearchValue = (e: any) => {
    setSearchValue(e.target.value);
    searchResult.mutate(e.target.value);
  };

  return { searchResult, getsearchValue, searchValue };
};

export default UseSearch;

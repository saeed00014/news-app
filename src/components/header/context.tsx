"use client"
import { baseURL } from "@/axios/axios";
import { HeaderContext } from "@/context/context";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Context = ({ children }: { children: React.ReactNode }) => {
  const userResult = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userInfo");
      return response.data?.result[0];
    },
    retry: 0
  });

  const user = userResult.data

  return (
    <HeaderContext.Provider
      value={{
        user: user,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default Context;

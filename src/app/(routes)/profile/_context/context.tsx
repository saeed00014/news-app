"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { ProfileContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";
import { notFound, useParams } from "next/navigation";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  
  const user_id = useParams()?.id;

  const userResult = useQuery({
    queryKey: [`userFull${user_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/users/userFull?user_id=${user_id}`);
      return response.data;
    },
  });

  if (userResult.isPending) {
    return (
      <div className="flex justify-center w-full">
        <LoadingSpin />
      </div>
    );
  }

  const user = userResult.data.result[0];
  const isLoginUser = userResult.data.loginUser;

  if(!user) {
    return notFound()
  }
           
  return (
    <ProfileContext.Provider
      value={{
        user: user,
        isEditActive: isEditActive,
        setIsEditActive: setIsEditActive,
        isLoginUser: isLoginUser,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default Context;

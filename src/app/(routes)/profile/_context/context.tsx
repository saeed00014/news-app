"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { baseURL } from "@/axios/axios";
import { ProfileContext } from "@/context/context";
import LoadingSpin from "@/components/loadingSpin";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [isEditActive, setIsEditActive] = useState(false);

  const userResult = useQuery({
    queryKey: ["userFull"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userFull");
      return response.data?.result[0];
    },
  });

  if (userResult.isPending) {
    return (
      <div className="flex justify-center w-full">
        <LoadingSpin />
      </div>
    );
  }

  const user = userResult.data;

  return (
    <ProfileContext.Provider
      value={{
        user: user,
        isEditActive: isEditActive,
        setIsEditActive: setIsEditActive,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default Context;

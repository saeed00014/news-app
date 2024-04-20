"use client"
import { NewsShareContext } from "@/context/context";
import { UserSqlType } from "@/types/types";
import React, { useState } from "react";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [choosedUsers, setChooseUsers] = useState([] as UserSqlType[]);

  return (
    <NewsShareContext.Provider
      value={{
        choosedUsers,
        setChooseUsers,
      }}
    >
      {children}
    </NewsShareContext.Provider>
  );
};

export default Context;

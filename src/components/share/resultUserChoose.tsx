import React, { useContext, useState } from "react";
import { NewsShareContext } from "@/context/context";
import { UserSqlType } from "@/types/types";
import { ResultUser } from "@/components/ui/resultUser";

const ResultUserChoose = ({ user }: { user: UserSqlType }) => {
  const { choosedUsers, setChooseUsers } = useContext(NewsShareContext);

  const userIsChoosed = choosedUsers.find(
    (choosedUser) => choosedUser.id === user.id
  );

  const handleChooseUser = () => {
    if (!userIsChoosed) {
      setChooseUsers((oldUsers) => [...oldUsers, user]);
    }

    if (userIsChoosed) {
      setChooseUsers((oldUsers) =>
        oldUsers.filter((oldUser) => oldUser.id !== user.id)
      );
    }
  };

  return (
    <div
      onClick={handleChooseUser}
      className="group relative flex items-center justify-start w-full  cursor-pointer"
    >
      <ResultUser user={user} classNames="" />
      <span
        className={`absolute left-5 flex w-[2rem] h-[2rem] ${
          userIsChoosed ? "bg-ash" : ""
        } rounded-full border-2 border-ash`}
      ></span>
    </div>
  );
};

export default ResultUserChoose;

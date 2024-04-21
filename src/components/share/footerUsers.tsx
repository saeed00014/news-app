import { useContext } from "react";
import { NewsShareContext } from "@/context/context";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { UserSqlType } from "@/types/types";

const FooterUsers = () => {
  const { choosedUsers, setChooseUsers } = useContext(NewsShareContext);

  const handleChooseUser = ({ user }: { user: UserSqlType }) => {
    setChooseUsers((oldUsers) =>
      oldUsers.filter((oldUser) => oldUser.id !== user.id)
    );
  };

  if (Array.isArray(choosedUsers) && choosedUsers[0]) {
    return (
      <div className="flex w-fit h-fit gap-1">
        {choosedUsers.map((user) => {
          return (
            <span
              onClick={() => handleChooseUser({user})}
              key={user.id}
              className="group relative w-10 h-10 flex items-center justify-center rounded-full -mr-4 border-[1px]"
            >
              <Image
                fill={true}
                src={user.image || defaultImage}
                alt="profile picture"
                className="rounded-full"
              />
              <span className="group invisible group-hover:visible absolute -top-[2rem] flex flex-col justify-center items-start px-[.3rem] py-[.2rem] min-w-fit max-w-[6rem] min-h-fit max-h-[3rem] rounded-[.2rem] text-[.7rem] bg-darkgrass text-ship overflow-hidden">
                <span className="min-w-max">.{user.username}</span>
              </span>
            </span>
          );
        })}
      </div>
    );
  }

  return <div>no user choosen yet</div>;
};

export default FooterUsers;

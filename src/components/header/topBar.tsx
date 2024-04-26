"use client"
import persian from "@/assets/data";
import { TextLink } from "../ui/link";
import { DropDownBtn, DropDownMenu } from "../ui/dropDown";
import { useContext } from "react";
import { HeaderContext } from "@/context/context";
import { User } from "../ui/user";

const TopBar = () => {
  const { user } = useContext(HeaderContext);

  return (
    <>
      <div className="lg:flex hidden lg:gap-8 gap-2 w-full">
        <TextLink path="/" text={persian.firstPage} classNames="text-blood" />
        <TextLink path="/messenger/inbox" text={persian.messenger} />
        <div className="group relative">
          <DropDownBtn text={persian.news} />
          <DropDownMenu />
        </div>
      </div>
      {user ? (
        <User user={user} classNames={"lg:flex hidden "} />
      ) : (
        <TextLink
          path="/login"
          text={persian.signInsignUp}
          classNames="lg:flex hidden text-ship bg-grass rounded-[.3rem] cursor-pointer hover:brightness-110"
        />
      )}
    </>
  );
};

export default TopBar;

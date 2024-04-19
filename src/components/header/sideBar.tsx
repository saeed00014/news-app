"use client";
import persian from "@/assets/data";
import { TextLink } from "../ui/link";
import { DropDownBtn, DropDownMenu } from "../ui/dropDown";
import React, { useContext } from "react";
import Logo from "../ui/logo";
import CloseBtn from "../closeBtn";
import CloseBg from "../closeBg";
import { User } from "../ui/user";
import { HeaderContext } from "@/context/context";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};

const SideBar = ({ setIsOpen, isOpen }: Props) => {
  const { user } = useContext(HeaderContext);

  return (
    <div
      className={`fixed ${
        isOpen ? "right-0" : "-right-[230px]"
      } top-0 lg:hidden flex flex-col h-screen w-[220px] lg:gap-8 gap-2 transition-all duration-200 z-50`}
    >
      {isOpen && <CloseBg setEvent={setIsOpen} />}
      <div className="h-full bg-ship z-50">
        <div>
          <div className="flex justify-between items-center h-[65px] px-3">
            <span onClick={() => setIsOpen(false)}>
              <Logo />
            </span>
            <CloseBtn setEvent={setIsOpen} />
          </div>
          <span onClick={() => setIsOpen(false)}>
            <TextLink
              path="/"
              text={persian.firstPage}
              classNames="flex items-center h-[65px] pr-6 text-blood"
            />
          </span>
          <span onClick={() => setIsOpen(false)}>
            <TextLink
              path="/messenger/inbox"
              text={persian.messenger}
              classNames="flex items-center h-[65px] pr-6"
            />
          </span>
          <div className="group relative">
            <DropDownBtn
              text={persian.news}
              classNames="flex items-center h-[65px] w-full pr-6 "
            />
            <span onClick={() => setIsOpen(false)}>
              <DropDownMenu />
            </span>
          </div>
        </div>
        <div onClick={() => setIsOpen(false)} className="flex justify-center ">
          {user ? (
            <User
              user={user}
              classNames="absolute bottom-5 bg-moon w-[200px] py-2 rounded-[1rem] hover:brightness-90 [&>*:nth-child(2)]:flex [&>*:nth-child(1)]:h-[55px] [&>*:nth-child(1)]:w-[55px]"
            />
          ) : (
            <TextLink
              path="/login"
              text={persian.signInsignUp}
              classNames="flex absolute bottom-5 min-w-max text-ship bg-grass rounded-[.3rem] cursor-pointer hover:brightness-110"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

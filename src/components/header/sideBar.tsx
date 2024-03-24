import persian from "@/assets/data";
import { TextLink } from "../ui/link";
import { DropDownBtn } from "../ui/dropDownMenu";
import React from "react";
import Logo from "../ui/logo";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div
      className={`fixed ${
        isOpen ? "right-0" : "-right-[230px]"
      } top-0 lg:hidden flex flex-col h-screen w-[220px] lg:gap-8 gap-2 transition-all duration-200 z-50`}
    >
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed right-0 top-0 bottom-0 left-0 ${
          isOpen ? "" : "hidden"
        } bg-ash/65 z-40`}
      ></div>
      <div className="h-full bg-ship z-50">
        <div>
          <div className="flex justify-between items-center h-[65px] px-3">
            <Logo />
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="px-[.8rem] py-[.8rem] hover:bg-ash rounded-full cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <TextLink
            path="/"
            text={persian.firstPage}
            classNames="flex items-center h-[65px] pr-6 text-blood"
          />
          <TextLink
            path="/messenger"
            text={persian.messenger}
            classNames="flex items-center h-[65px] pr-6"
          />
          <DropDownBtn
            text={persian.news}
            classNames="flex items-center h-[65px] w-full pr-6"
          />
        </div>
        <div className="flex justify-center ">
          <TextLink
            path="/login"
            text={persian.signInsignUp}
            classNames="absolute bottom-5 min-w-max text-ship bg-grass rounded-[.3rem] cursor-pointer hover:brightness-110"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

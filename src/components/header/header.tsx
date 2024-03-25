import React from "react";
import persian from "@/assets/data";
import Logo from "../ui/logo";
import { DropDownBtn } from "../ui/dropDownMenu";
import { TextLink } from "../ui/link";
import HamburgerMenu from "./hamburgerMenu";
import BottomBar from "./bottomBar";

const Header = () => {
  return (
    <header className="sticky top-0 flex justify-center w-full z-50">
      <nav className="flex items-center justify-between h-[65px] w-full pl-6 pr-4 lg:my-5 bg-ship lg:rounded-[.6rem] rounded-b-[2rem]">
        <Logo />
        <div className="lg:flex hidden lg:gap-8 gap-2 w-full">
          <TextLink path="/" text={persian.firstPage} classNames="text-blood" />
          <TextLink path="/messenger" text={persian.messenger} />
          <DropDownBtn text={persian.news} />
        </div>
        <TextLink
          path="/login"
          text={persian.signInsignUp}
          classNames="lg:flex hidden min-w-max text-ship bg-grass rounded-[.3rem] cursor-pointer hover:brightness-110"
        />
        <HamburgerMenu />
        <BottomBar />
      </nav>
    </header>
  );
};

export default Header;

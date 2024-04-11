import React from "react";
import persian from "@/assets/data";
import Logo from "../ui/logo";
import { TextLink } from "../ui/link";
import HamburgerMenu from "./hamburgerMenu";
import BottomBar from "./bottomBar";
import { DropDownBtn, DropDownMenu } from "../ui/dropDown";

const Header = () => {
  return (
    <header className="fixed top-0 flex justify-center lg:px-4 px-0 w-full z-50">
      <nav className="flex justify-between items-center max-w-[1400px] h-[65px] w-full pl-6 pr-4 lg:my-2 lg:border border-b border-ash lg:border-b-ash border-b-dark bg-ship lg:rounded-[.2rem] ">
        <Logo />
        <div className="lg:flex hidden lg:gap-8 gap-2 w-full">
          <TextLink path="/" text={persian.firstPage} classNames="text-blood" />
          <TextLink path="/messenger/inbox" text={persian.messenger} />
          <div className="group relative">
            <DropDownBtn text={persian.news} />
            <DropDownMenu />
          </div>
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

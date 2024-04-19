import React from "react";
import Logo from "../ui/logo";
import HamburgerMenu from "./hamburgerMenu";
import BottomBar from "./bottomBar";
import Context from "./context";
import TopBar from "./topBar";

const Header = () => {
  return (
    <header className="fixed top-0 flex justify-center lg:px-4 px-0 w-full z-50">
      <nav className="flex justify-between items-center max-w-[1400px] h-[65px] w-full pl-6 pr-4 lg:my-2 lg:border border-b border-ash lg:border-b-ash border-b-dark bg-ship lg:rounded-[.2rem] ">
        <Logo />
        <Context>
          <TopBar />
          <HamburgerMenu />
          <BottomBar />
        </Context>
      </nav>
    </header>
  );
};

export default Header;

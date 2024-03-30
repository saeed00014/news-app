import React from "react";
import SideBar from "./sideBar";
import Room from "./room";

const Page = () => {
  return (
    <section className="relative flex h-full w-full lg:p-0 p-2 lg:pb-10 pb-[4.4rem] overflow-hidden">
      <SideBar />
      <Room />
    </section>
  );
};

export default Page;

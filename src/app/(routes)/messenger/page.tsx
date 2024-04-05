import React from "react";
import SideBar from "./sideBar";
import Room from "./room";

const Page = () => {
  return (
    <section className="relative flex h-full w-full max-w-[1400px] overflow-x-hidden z-10">
      <SideBar />
      <Room />
    </section>
  );
};

export default Page;

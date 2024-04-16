import React from "react";
import SideBar from "../_sideBar/sideBar";
import Room from "../_room/room";

const Page = () => {
  return (
    <section className="relative flex h-full w-full max-w-[1400px] overflow-hidden pb-3 z-10">
      <SideBar />
      <Room />
    </section>
  );
};

export default Page;

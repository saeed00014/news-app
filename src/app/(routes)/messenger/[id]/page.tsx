import React from "react";
import SideBar from "../_sideBar/sideBar";
import Room from "../_room/room";

const Page = () => {
  return (
    <section className="fixed lg:top-[80px] top-[70px] lg:bottom-[20px] bottom-[70px] right-1 left-1 flex justify-center lg:px-4">
      <div className="flex w-full h-full max-w-[1400px] overflow-hidden">
        <SideBar />
        <Room />
      </div>
    </section>
  );
};

export default Page;

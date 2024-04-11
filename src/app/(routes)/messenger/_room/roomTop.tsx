"use client";
import RoomTopUser from "./roomTopUser";
import RoomTopOptoins from "./roomTopOptoins";

const RoomTop = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between px-2 md:h-[65px] md:min-h-[65px] h-[55px] min-h-[55px] gap-2 border-b border-l bg-ship z-20">
      <RoomTopUser />
      <RoomTopOptoins />
    </div>
  );
};

export default RoomTop;

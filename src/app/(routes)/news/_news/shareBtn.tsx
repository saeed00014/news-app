"use client"
import Share from "@/components/share/share";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareBtn = () => {
  const [isShareActive, setIsShareActive] = useState(false)
  return (
    <>
      <div onClick={() => setIsShareActive(true)} className="p-[.5rem] pl-[.4rem] pr-[.6rem] bg-moon text-lightblood rounded-full hover:brightness-90 cursor-pointer">
        <FaShareAlt className="text-2xl" />
      </div>
      {isShareActive && <Share setIsShareActive={setIsShareActive} />}
    </>
  );
};

export default ShareBtn;

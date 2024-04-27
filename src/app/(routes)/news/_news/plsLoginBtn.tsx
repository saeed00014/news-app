"use client";
import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

const PlsLoginBtn = () => {
  const [isPlsLogin, setIsPlsLogin] = useState(false);
  return (
    <div
      onClick={() => setIsPlsLogin(true)}
      className="p-[.5rem] pl-[.4rem] pr-[.6rem] bg-moon text-lightblood rounded-full hover:brightness-90 cursor-pointer"
    >
      <FaShareAlt className="text-2xl" />
    </div>
  );
};

export default PlsLoginBtn;

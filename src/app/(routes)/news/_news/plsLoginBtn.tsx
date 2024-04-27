"use client";
import React, { useEffect } from "react";
import PopUp from "@/components/ui/popUp";
import { useState } from "react";
import { createPortal, render } from "react-dom";
import { FaShareAlt } from "react-icons/fa";
import PopUpTimer from "@/components/popUpTimer";
import persian from "@/assets/data";

const PlsLoginBtn = () => {
  const [isPopUp, setIsPopUp] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsPopUp(true)}
        className="p-[.5rem] pl-[.4rem] pr-[.6rem] bg-moon text-lightblood rounded-full hover:brightness-90 cursor-pointer"
      >
        <FaShareAlt className="text-2xl" />
      </div>
      {isPopUp && (
        <PopUpTimer
          isPopUp={isPopUp}
          setIsPopUp={setIsPopUp}
          content={{ text: persian.plsLogin, success: false }}
        />
      )}
    </>
  );
};

export default PlsLoginBtn;

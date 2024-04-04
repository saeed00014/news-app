"use client";

import { useState } from "react";
import { merge } from "@/lib/utils/merge";
import { TbArrowForward } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";

type Props = {
  clickEvent: Function;
  classNames?: string;
};

const Message = ({ clickEvent, classNames }: Props) => {
  const [isChooseMessage, setIsChooseMessage] = useState(false);

  const handleClick = () => {
    // clickEvent()
    setIsChooseMessage((prev) => !prev);
  };
  return (
    <li className={merge("relative flex w-full gap-2", classNames)}>
      <div onMouseDown={handleClick} className="flex w-fit gap-1 text-ship">
        <span className="flex py-2 px-3 gap-10 max-w-[20rem] rounded-[.8rem] bg-darkwater">
          test Messages
        </span>
        {isChooseMessage && (
          <span className="flex items-center h-full rounded-[.8rem] gap-3 text-ship bg-darkwater">
            <TbArrowForward className="text-[1.8rem] w-10" />
            <RiPencilFill className="text-[1.4rem] w-10" />
            <FaTrash className="text-[1.1rem] w-10" />
          </span>
        )}
      </div>
    </li>
  );
};

export default Message;

import React from "react";

type Props = {
  text: string;
  success: boolean;
  classNames?: string;
};

const PopUp = ({ text, success, classNames }: Props) => {
  return (
    <div className="flex items-center justify-center pt-3 pb-4 w-[20rem] bg-ship text-dark rounded-[.4rem] overflow-hidden z-[100] animate-[completeFade_2.5s_ease-in-out_forwards] border border-dark">
      {text}
      <span
        className={`absolute bottom-0 animate-[move_2s_ease-in-out_infinite] flex w-full h-[.6rem] rounded-full ${
          success ? "bg-grass" : "bg-blood"
        }`}
      ></span>
    </div>
  );
};

export default PopUp;

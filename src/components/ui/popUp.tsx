import React from "react";

type Props = {
  text: string;
  success: boolean;
  classNames?: string;
};

const PopUp = ({ text, success, classNames }: Props) => {
  setTimeout(() => {

  }, 2000)
  return (
    <div className="fixed bottom-10 right-4 flex items-center justify-center pt-3 pb-4 w-[20rem] bg-ship rounded-[.4rem] overflow-hidden">
      your account is made{text}
      <span className={`absolute bottom-0 animate-[move_2s_ease-in-out_infinite] flex w-full h-[.6rem] ${success ? "bg-grass" : "bg-blood" }`}></span>
    </div>
  );
};

export default PopUp;

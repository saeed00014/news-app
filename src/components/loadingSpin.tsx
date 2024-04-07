import React from "react";
import { merge } from "@/lib/utils/merge";

const LoadingSpin = ({ classNames }: { classNames?: string }) => {
  return (
    <div
      className={merge(
        "flex items-center justify-center animate-spin w-[1.8rem] min-w-[1.8rem] h-[1.8rem] border-[.2rem] border-black border-l-transparent rounded-full",
        classNames
      )}
    >
    </div>
  );
};

export default LoadingSpin;

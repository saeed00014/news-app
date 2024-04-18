import useColorPicker from "@/hooks/useColorPicker";
import { merge } from "@/lib/utils/merge";
import React from "react";

const Category = ({ text }: { text: string }) => {
  const classNames = useColorPicker(text);

  return (
    <span
      className={merge(
        "pr-2 pl-[.4rem] pb-[.02rem] pt-[.2rem] w-fit md:text-[.90rem] text-[.7rem] text-ship rounded-[.2rem]",
        classNames
      )}
    >
      {text}
    </span>
  );
};

export default Category;

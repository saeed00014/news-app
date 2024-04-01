import { merge } from "@/lib/utils/merge";
import React from "react";

type Props = {
  id?: string;
  text: string;
  classNames?: string;
};

const Label = ({ id, text, classNames }: Props) => {
  return (
    <label
      htmlFor={id}
      className={merge(
        "flex items-center w-full min-w-max gap-1 text-[.9rem]",
        classNames
      )}
    >
      {text}
    </label>
  );
};

export default Label;

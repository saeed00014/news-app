import { merge } from "@/lib/utils/merge";
import React from "react";

type Props = {
  value?: string;
  classNames?: string;
};

const Submit = ({ value, classNames }: Props) => {
  return (
    <input
      type="submit"
      id="submit"
      value={value}
      className={merge(
        "flex justify-center py-2 w-[10rem] rounded-[.2rem] bg-grass hover:brightness-110  cursor-pointer",
        classNames
      )}
    />
  );
};

export default Submit;

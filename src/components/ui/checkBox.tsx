import React from "react";
import { merge } from "@/lib/utils/merge";

type Props = {
  register: any;
  name: string;
  id: string;
  value: boolean;
  classNames?: string;
};

const Checkbox = ({ register, id, name, value, classNames }: Props) => {
  return (
    <input
      {...register(name)}
      type="checkbox"
      id={id}
      name={name}
      value={value}
      className={merge(
        "h-5 w-full px-2 pb-1 bg-gray-200",
        classNames
      )}
    />
  );
};

export default Checkbox;

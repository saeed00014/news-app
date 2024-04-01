import { merge } from "@/lib/utils/merge";
import React from "react";

type Props = {
  register?: any;
  type: string;
  name: string;
  id: string;
  value?: string;
  placeholder?: string;
  isIconError?: any;
  classNames?: string;
};

const Input = ({
  register,
  type,
  id,
  name,
  value,
  placeholder,
  isIconError,
  classNames,
}: Props) => {
  return (
    <input
      {...register(name)}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className={merge(
        `h-10 w-full px-2 pb-1 bg-moon ${
          isIconError && "border-[1px] border-text-error"
        }`,
        classNames
      )}
    />
  );
};

export default Input;

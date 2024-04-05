import { merge } from "@/lib/utils/merge";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

type ErrorIcon = {
  text: string;
  classNames?: string;
};

const ErrorIcon = ({ text, classNames }: ErrorIcon) => {
  return (
    <div
      className={merge(
        "group absolute top-[.6rem] left-2 cursor-pointer",
        classNames
      )}
    >
      <BiSolidErrorAlt className="text-red-600 text-[1.3rem]" />
      <span className="group-hover:flex hidden absolute -left-3 -top-7 min-w-max bg-red-600 text-white rounded-[.4rem] px-2 py-[.1rem] text-[.9rem]">
        {text}
      </span>
    </div>
  );
};

type ErrorText = {
  text: string;
};

const ErrorText = ({ text }: ErrorText) => {
  return (
    <span className="flex justify-start w-full text-[.95rem] text-red-600">
      {text}
    </span>
  );
};

export { ErrorText, ErrorIcon };

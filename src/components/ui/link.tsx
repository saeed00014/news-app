import { merge } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

type TextLink = {
  text: string;
  path: string;
  classNames?: string;
};

const TextLink = ({ text, path, classNames }: TextLink) => {
  return (
    <Link
      href={path}
      className={merge("px-[.80rem] py-[.50rem] min-w-max", classNames)}
    >
      {text}
    </Link>
  );
};

type IconLink = {
  icon: ReactNode;
  path: string;
  classNames?: string;
};

const IconLink = ({ icon, path, classNames }: IconLink) => {
  return (
    <Link
      href={path}
      className={merge(
        "flex flex-col items-center justify-center h-[65px] w-[65px] min-w-max",
        classNames
      )}
    >
      {icon}
    </Link>
  );
};

export { TextLink, IconLink };

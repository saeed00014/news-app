import { merge } from "@/lib/utils/merge";
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
      className={merge("text-dark px-[.80rem] py-[.50rem] min-w-max", classNames)}
    >
      {text}
    </Link>
  );
};

type IconLink = {
  text: string;
  icon: ReactNode;
  path: string;
  classNames?: string;
};

const IconLink = ({ text, icon, path, classNames }: IconLink) => {
  return (
    <Link
      href={path}
      aria-label={text}
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

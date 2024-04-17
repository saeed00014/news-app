"use client";
import persian, { categories } from "@/assets/data";
import { merge } from "@/lib/utils/merge";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

type DropDownBtn = {
  text: string;
  classNames?: string;
};

const DropDownBtn = ({ text, classNames }: DropDownBtn) => {
  return (
    <button
      className={merge(
        "group flex items-center px-[.80rem] py-[.50rem] gap-2",
        classNames
      )}
    >
      <span className="group lg:group-hover:rotate-180 duration-100">
        <IoIosArrowDown />
      </span>
      <span>{text}</span>
    </button>
  );
};

type DropDownItem = {
  text: string;
};

const DropDownItem = ({ text }: DropDownItem) => {
  return <Link href={`/category/${text}`}>{text}</Link>;
};

const DropDownMenu = () => {
  return (
    <div className="flex flex-col absolute lg:w-[13rem] w-full lg:h-0 h-[16rem] group-hover:h-[16rem] duration-150 bg-ship overflow-hidden">
      {categories.map((category) => {
        return (
          <div
            className="py-2 h-full w-full px-5 hover:bg-moon border-t border-t-dark cursor-pointer"
            key={category}
          >
            <DropDownItem text={category} />
          </div>
        );
      })}
    </div>
  );
};

export { DropDownBtn, DropDownMenu };

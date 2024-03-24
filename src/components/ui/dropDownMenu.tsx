import { merge } from "@/lib/utils";
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
      <span className="group group-focus:rotate-180">
        <IoIosArrowDown />
      </span>
      <span>{text}</span>
    </button>
  );
};

type DropDownItem = {
  text: string;
};

const DropDownItem = ({ text }: DropDownItem) => {};

export { DropDownBtn };

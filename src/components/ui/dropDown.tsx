import persian from "@/assets/data";
import { merge } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";

type DropDownBtnType = {
  text: string;
  classNames?: string;
};

const DropDownBtn = ({ text, classNames }: DropDownBtnType) => {
  return (
    <button
      
      className={merge(
        "group flex items-center px-[.80rem] py-[.50rem] gap-2",
        classNames
      )}
    >
      <span className="group group-hover:rotate-180 duration-100">
        <IoIosArrowDown />
      </span>
      <span>{text}</span>
    </button>
  );
};

const DropDownMenu = () => {
  return (
    <div className="group flex flex-col absolute lg:w-[13rem] w-full h-0 group-hover:h-[16rem] duration-100 bg-ship lg:shadow-dark border-dark lg:rounded-[1rem] lg:[&>*:nth-child(6)]:border-none lg:[&>*:nth-child(1)]:border-t-none [&>*:nth-child(1)]:border-t overflow-hidden">
      <DropDownItem text={persian.economy} />
      <DropDownItem text={persian.dolargold} />
      <DropDownItem text={persian.stockmarket} />
      <DropDownItem text={persian.society} />
      <DropDownItem text={persian.worldeconemy} />
      <DropDownItem text={persian.shitcoin} />
    </div>
  )
}

type DropDownItem = {
  text: string;
};

const DropDownItem = ({ text }: DropDownItem) => {
  return (
    <div className="py-2 h-full px-5 hover:bg-moon border-b border-dark cursor-pointer">
      {text}
    </div>
  )
};

export { DropDownBtn, DropDownMenu };

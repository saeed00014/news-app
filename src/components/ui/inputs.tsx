import { merge } from "@/lib/utils/merge";
import React from "react";

type Input = {
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
}: Input) => {
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

type Label = {
  id?: string;
  text: string;
  classNames?: string;
};

const Label = ({ id, text, classNames }: Label) => {
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

type Radio = {
  register?: any;
  type: string;
  id: string;
  name: string;
  value: string;
  placeholder?: string;
};

const Radio = ({ register, type, id, name, value, placeholder }: Radio) => {
  return (
    <input
      {...register(name)}
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      className="appearance-none min-w-[14px] min-h-[14px] rounded-full border border-black checked:bg-ash"
    />
  );
};

type Select = {
  register?: any;
  id: string;
  name: string;
  options: string[] | number[];
};

const Select = ({ register, id, name, options }: Select) => {
  return (
    <select
      {...register(name)}
      id={id}
      name={name}
      className="h-10 w-full px-2 border border-dark bg-ship appearance-none"
    >
      {options.map((option, e) => {
        return (
          <option key={e} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

type Submit = {
  value?: string;
  classNames?: string;
};

const Submit = ({ value, classNames }: Submit) => {
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

type Checkbox = {
  register: any;
  name: string;
  id: string;
  value: boolean;
  classNames?: string;
};

const Checkbox = ({ register, id, name, value, classNames }: Checkbox) => {
  return (
    <input
      {...register(name)}
      type="checkbox"
      id={id}
      name={name}
      value={value}
      className={merge("h-5 w-full px-2 pb-1 bg-gray-200", classNames)}
    />
  );
};

export { Input, Label, Radio, Select, Submit, Checkbox };

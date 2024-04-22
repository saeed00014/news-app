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
      id={id}
      type={type}
      name={name}
      value={value || undefined}
      placeholder={placeholder}
      className={merge(
        `h-10 w-full px-2 bg-moon ${isIconError && "border border-blood"}`,
        classNames
      )}
    />
  );
};

type NormalInput = {
  onChange: Function;
  type: string;
  name: string;
  id: string;
  value: string;
  placeholder?: string;
  isIconError?: any;
  classNames?: string;
};

const NormalInput = ({
  onChange,
  type,
  id,
  name,
  value,
  placeholder,
  isIconError,
  classNames,
}: NormalInput) => {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      className={merge(
        `h-10 w-full px-2 bg-moon ${isIconError && "border border-blood"}`,
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

type MaxChar = {
  maxChar: number;
  value: string;
};

const MaxChar = ({ maxChar, value }: MaxChar) => {
  return (
    <div>
      {maxChar}/{value?.length}
    </div>
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
  options: number[];
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
        "flex justify-center py-2 w-[10rem] rounded-[.2rem] bg-grass text-ship hover:brightness-110 cursor-pointer",
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

type Textarea = {
  register: any;
  name: string;
  id: string;
  isIconError?: any;
  placeholder?: string;
  classNames?: string;
};

const Textarea = ({
  register,
  id,
  name,
  isIconError,
  placeholder,
  classNames,
}: Textarea) => {
  return (
    <textarea
      {...register(name)}
      id={id}
      name={name}
      placeholder={placeholder}
      className={merge(
        `flex items-start justify-start text-start align-top w-full min-h-[8rem] max-h-[8rem] py-1 px-1 bg-gray-200 dark:bg-gray-700 ${
          isIconError && "border-[1px] border-text-error"
        }`,
        classNames
      )}
    />
  );
};

export {
  Input,
  NormalInput,
  Label,
  MaxChar,
  Radio,
  Select,
  Submit,
  Checkbox,
  Textarea,
};

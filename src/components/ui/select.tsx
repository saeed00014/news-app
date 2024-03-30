import React from "react";

type Props = {
  register?: any;
  id: string;
  name: string;
  options: string[] | number[];
};

const Select = ({ register, id, name, options }: Props) => {
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

export default Select;

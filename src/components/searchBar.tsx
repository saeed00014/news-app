"use client";
import persian from "@/assets/data";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./ui/inputs";
import { merge } from "@/lib/utils/merge";

type Props = {
  onChange: Function;
  classNames?: string;
};

const SearchBar = ({ onChange, classNames }: Props) => {
  const { register, watch } = useForm({
    mode: "all",
  });

  return (
    <div
      onChange={(e) => onChange(e)}
      className={merge("relative flex items-center", classNames)}
    >
      <label htmlFor="search" className="absolute right-5 text-[1.4rem]">
        <IoIosSearch className="text-ash" />
      </label>
      <Input
        register={register}
        type="text"
        name="search"
        id="search"
        placeholder={persian.search}
        classNames="rounded-full pr-10 border border-ash"
      />
    </div>
  );
};

export default SearchBar;

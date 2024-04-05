"use client";
import persian from "@/assets/data";
import { useForm } from "react-hook-form";
import { IoIosSearch } from "react-icons/io";
import { Input } from "./ui/inputs";

const SearchBar = () => {
  const { register, watch } = useForm({
    mode: "all",
  });
  // console.log(watch("search"));
  return (
    <div className="relative flex items-center">
      <label htmlFor="search" className="absolute right-2 text-[1.4rem]">
        <IoIosSearch className="text-ash" />
      </label>
      <Input
        register={register}
        type="text"
        name="search"
        id="search"
        placeholder={persian.search}
        classNames="rounded-full pr-8 pt-[.4rem] border border-ash"
      />
    </div>
  );
};

export default SearchBar;

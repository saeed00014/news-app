"use client";
import { NormalInput } from "./ui/inputs";
import persian from "@/assets/data";
import { AiOutlineSend } from "react-icons/ai";
import { Submit } from "./ui/inputs";
import React from "react";

type Props = {
  onSubmit: Function;
  sendValue: string;
  setSendValue: React.Dispatch<React.SetStateAction<string>>;
};

const SendBar = ({ onSubmit, sendValue, setSendValue }: Props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleChange = (e: any) => {
    setSendValue(e.target.value);
  };

  return (
    <form
      method="post"
      onSubmit={(e) => handleSubmit(e)}
      className="sticky bottom-0 flex w-full lg:px-4 px-2 md:pb-4 pb-2"
    >
      <div className="relative w-full">
        <NormalInput
          type="text"
          id="text"
          name="text"
          value={sendValue}
          placeholder={persian.sendBar}
          onChange={handleChange}
          classNames="bg-ship rounded-full pr-[3.5rem] pt-[.3rem] pl-24"
        />
        <label
          htmlFor="submit"
          className="absolute right-0 top-0 flex items-center justify-center h-full w-[3rem] text-2xl cursor-pointer"
        >
          <AiOutlineSend />
          <Submit classNames="w-0 h-0" />
        </label>
      </div>
    </form>
  );
};

export default SendBar;

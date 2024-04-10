"use client";
import { Input } from "./ui/inputs";
import persian from "@/assets/data";
import { useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai";
import { Submit } from "./ui/inputs";

const SendBar = ({ onSubmit }: { onSubmit: Function }) => {
  const { register, getValues, handleSubmit } = useForm({});

  return (
    <form
      method="post"
      onSubmit={handleSubmit(() => onSubmit(getValues))}
      className="sticky bottom-0 flex w-full lg:px-4 px-2 md:pb-4 pb-2"
    >
      <div className="relative w-full">
        <Input
          register={register}
          type="text"
          id="text"
          name="text"
          placeholder={persian.sendBar}
          classNames="bg-ship rounded-full pr-[3.5rem] pt-[.3rem]"
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

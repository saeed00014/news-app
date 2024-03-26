import persian from "@/assets/data";
import Image from "next/image";
import testsuggested from "@/assets/testsuggestedAdd.jpg"
import { merge } from "@/lib/utils";
import addImage from "@/assets/testAdd.gif"
import React from "react";

type AddCard = {
  classNames?: string
}

const AddCard = ({classNames}: AddCard) => {
  return (
    <div className={merge("group relative flex flex-col md:min-w-[13rem] max-w-[13rem] bg-ship gap-2 rounded-[.4rem] cursor-pointer", classNames)}>
      <Image 
        alt={persian.adds}
        className="object-contain"
        src={testsuggested}
      />
      <span className="group group-hover:text-blood line-clamp-2 md:text-[1rem] text-[.8rem]">
      6 هزار و 400 تومان شد. قیمت اسکناس یورو در مرکز مبادله هم با کاهش نسبت به روز یکشنبه، له یورو نیز با کاهش نسبت به روز 
      </span>
      <span className="absolute right-0 left-0 bottom-0 top-0"></span>
    </div>
  );
};

const AddBar = () => {
  return (
    <div className="relative flex items-center justify-center w-full md:h-[4rem] h-[3rem] border-2 border-blood">
      <Image 
        alt={persian.adds}
        layout="fill"
        unoptimized
        src={addImage}
      />
    </div>
  )
}

type AddScroller = {
  children: React.ReactNode
}

const AddScroller = ({children}: AddScroller) => {
  return (
    <div className="relative flex justify-center max-w-full gap-4">
      {children}
    </div>
  )
}

export { AddCard, AddBar, AddScroller}

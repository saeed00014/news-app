import React from "react";
import Image from "next/image";
import testNews from "@/assets/testNews.webp";
import persian from "@/assets/data";
import { merge } from "@/lib/utils/merge";
import Category from "../category";
import { NewsInfo } from "@/types/types";

type NewsCardImage = {
  newsInfo: NewsInfo;
  classNames?: string;
};

const NewsCardImage = ({ newsInfo, classNames }: NewsCard) => {
  return (
    <article
      className={merge("flex rounded-[.3rem] overflow-hidden", classNames)}
    >
      <div className="relative flex">
        <Image alt="dolar news" className="object-cover" src={testNews} />
        <div className="absolute bottom-0 flex flex-col justify-end w-full h-full px-3 pb-5 bg-ashImage gap-1">
          <Category text={persian.newsCategory} />
          <h2 className="text-ship">{persian.newsH2Tag}</h2>
          <p className="text-ship font-semibold">{persian.newsPTag}</p>
        </div>
      </div>
    </article>
  );
};

type NewsBar = {
  newsInfo: NewsInfo;
  classNames?: string;
};

const NewsBar = ({ newsInfo, classNames }: NewsBar) => {
  return (
    <article
      className={merge("flex items-center h-full w-full bg-ship", classNames)}
    >
      <div className="md:flex md:flex-row flex-col items-center">
        <Image
          alt="dolar news"
          className="md:w-[50%] object-cover md:max-w-[300px]"
          src={testNews}
        />
        <div className="flex flex-col justify-end w-full h-full md:px-3 px-2 md:pb-0 pb-1 md:gap-1">
          <Category text={persian.economy} />
          <h2 className="text-dark md:text-[1rem] text-[.8rem]">
            {persian.newsH2Tag}
          </h2>
          <p className="text-dark md:text-[1rem] text-[.9rem] font-semibold">
            {persian.newsPTag}
          </p>
          <p className="line-clamp-1">
            بازار مسکن در سال ۱۴۰۲ با استفاده از سیاست‌های انقباضی دولت، ثبات و
            کاهش قیمتی نسبی را تجربه کرده است. اتفاقی که برخی…
          </p>
        </div>
      </div>
    </article>
  );
};

type NewsCard = {
  newsInfo: NewsInfo;
  classNames?: string;
};

const NewsCard = ({ newsInfo, classNames }: NewsCard) => {
  return (
    <article
      className={merge(
        "group relative flex flex-col md:min-w-[13rem] max-w-[13rem] bg-ship gap-2 rounded-[.4rem] cursor-pointer",
        classNames
      )}
    >
      <Image alt={persian.adds} className="object-contain" src={testNews} />
      <span className="group group-hover:text-blood line-clamp-2 md:text-[1rem] text-[.8rem]">
        6 هزار و 400 تومان شد. قیمت اسکناس یورو در مرکز مبادله هم با کاهش نسبت
        به روز یکشنبه، له یورو نیز با کاهش نسبت به روز
      </span>
      <span className="absolute right-0 left-0 bottom-0 top-0"></span>
    </article>
  );
};

type SuggestedNews = {
  children: React.ReactNode;
};

const SuggestedNews = ({ children }: SuggestedNews) => {
  return <div className="flex flex-row gap-2">{children}</div>;
};

export { NewsBar, NewsCardImage, NewsCard, SuggestedNews };

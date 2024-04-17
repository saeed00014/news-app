import Link from "next/link";
import Image from "next/image";
import Category from "../category";
import { merge } from "@/lib/utils/merge";
import testNews from "@/assets/testNews.webp";
import persian from "@/assets/data";
import { MongoNewsType, NewsInfo } from "@/types/types";

type NewsCardImage = {
  newsInfo: NewsInfo;
  classNames?: string;
};

const NewsCardImage = ({ newsInfo, classNames }: NewsCard) => {
  return (
    <article
      className={merge(
        "group flex w-full h-full rounded-[.3rem] overflow-hidden cursor-pointer",
        classNames
      )}
    >
      <div className="relative flex w-full h-full">
        <Image
          alt="dolar news"
          layout="fill"
          className="group w-full h-full object-cover group-hover:scale-110 duration-200"
          src={newsInfo.image}
        />
        <Link
          className="absolute bottom-0 flex flex-col justify-end w-full h-full px-3 pb-5 bg-ashImage gap-1"
          href={`/news/1`}
        >
          <Category text={newsInfo.category} />
          <h2 className="text-ship">{persian.newsH2Tag}</h2>
          <p className="text-ship font-semibold">{newsInfo.title}</p>
        </Link>
      </div>
    </article>
  );
};

type NewsBar = {
  newsInfo: MongoNewsType;
  classNames?: string;
};

const NewsBar = ({ newsInfo, classNames }: NewsBar) => {
  return (
    <article
      className={merge("flex items-center h-full w-full bg-ship", classNames)}
    >
      <Link
        href={`/news/${newsInfo.title}`}
        className="md:flex md:flex-row flex-col items-center w-full"
      >
        <div className="relative md:w-[50%] w-full h-[10rem] object-cover">
          <Image
            alt="dolar news"
            layout="fill"
            className="w-full h-full object-cover"
            src={newsInfo.image}
          />
        </div>
        <div className="flex flex-col justify-end w-full h-full md:px-3 px-2 md:pb-0 pb-1 md:gap-1">
          <Category text={newsInfo.category} />
          <h2 className="text-dark md:text-[1rem] text-[.8rem]">
            {persian.newsH2Tag}
          </h2>
          <p className="text-dark md:text-[1rem] text-[.9rem] font-semibold">
            {newsInfo.title}
          </p>
          <p className="line-clamp-1">
            {newsInfo.description}
          </p>
        </div>
      </Link>
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
      <Link href={`/news/5`}>
        <Image alt={persian.adds} className="object-contain" src={testNews} />
        <span className="group group-hover:text-blood line-clamp-2 md:text-[1rem] text-[.8rem]">
          6 هزار و 400 تومان شد. قیمت اسکناس یورو در مرکز مبادله هم با کاهش نسبت
          به روز یکشنبه، له یورو نیز با کاهش نسبت به روز
        </span>
        <span className="absolute right-0 left-0 bottom-0 top-0"></span>
      </Link>
    </article>
  );
};

type SuggestedNews = {
  children: React.ReactNode;
};

const SuggestedNews = ({ children }: SuggestedNews) => {
  return <div className="flex flex-row gap-2">{children}</div>;
};

const PreRenderNewsPage = () => {
  return (
    <div className="flex flex-col w-full h-screen gap-3 animate-[fade_2s_ease-in-out_infinite]">
      <span className="w-[30%] h-[1rem] rounded-full bg-ash"></span>
      <span className="w-[80%] h-[1rem] rounded-full bg-ash"></span>
      <span className="lg:text-2xl md:text-[1.3rem] text-[1.1rem] font-semibold"></span>
      <div className="flex justify-center w-full">
        <div className="relative flex justify-center w-[700px] h-[400px] bg-ash"></div>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <span className="w-[80%] h-[1rem] rounded-full bg-ash"></span>
        <span className="w-[70%] h-[1rem] rounded-full bg-ash"></span>
      </div>
    </div>
  );
};

export { NewsBar, NewsCardImage, NewsCard, SuggestedNews, PreRenderNewsPage };

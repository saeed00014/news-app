import Link from "next/link";
import Image from "next/image";
import Category from "../category";
import { merge } from "@/lib/utils/merge";
import testNews from "@/assets/testNews.webp";
import persian from "@/assets/data";
import { MongoNewsType, NewsInfo } from "@/types/types";
import { smallNewsImageCard } from "@/lib/utils/styles";

type NewsCardImage = {
  newsInfo: MongoNewsType;
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
          src={`/news/${newsInfo._id}.webp`}
        />
        <Link
          className="absolute bottom-0 flex flex-col justify-end w-full h-full px-3 pb-5 bg-ashImage gap-1"
          href={`/news/${newsInfo._id}`}
        >
          <Category text={newsInfo?.category} />
          <h2 className="md:flex hidden text-ship">{persian.newsH2Tag}</h2>
          <p className="text-ship font-semibold md:text-[1rem] text-[.9rem]">
            {newsInfo?.title}
          </p>
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
      className={merge("flex items-start h-full w-full bg-ship", classNames)}
    >
      <Link
        href={`/news/${newsInfo._id}`}
        className="md:flex md:flex-row flex-col items-center w-full h-full"
      >
        <div className="relative md:w-[40%] md:max-w-[300px] md:h-[10rem] md:min-h-[10rem] h-full min-h-[7rem] max-h-[7rem] object-cover">
          <Image
            alt="dolar news"
            layout="fill"
            className="w-full h-full object-cover"
            src={`/news/${newsInfo._id}.webp`}
          />
        </div>
        <div className="flex flex-col justify-end w-full  md:px-3 px-1 md:py-0 py-1 md:gap-1">
          <Category text={newsInfo.category} />
          <h2 className="md:flex hidden text-dark md:text-[1rem] text-[.8rem]">
            {persian.newsH2Tag}
          </h2>
          <p className="text-dark md:text-[1rem] text-[.8rem] font-semibold">
            {newsInfo.title}
          </p>
          <span className="md:flex hidden">
            <p className="line-clamp-1">{newsInfo.description}</p>
          </span>
        </div>
      </Link>
    </article>
  );
};

type NewsCard = {
  newsInfo: MongoNewsType;
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
      <Link href={`/news/${newsInfo._id}`}>
        <Image
          alt={persian.adds}
          width={150}
          height={120}
          className="object-cover w-full max-h-[120px] min-h-[120px]"
          src={`/news/${newsInfo._id}.webp`}
        />
        <span className="group group-hover:text-blood line-clamp-2 md:text-[1rem] text-[.8rem]">
          {newsInfo.description}
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

type TopNews = {
  news: MongoNewsType[];
  classNames?: string;
};

const TopNews = ({ news, classNames }: TopNews) => {
  return (
    <section
      className={merge("grid md:grid-cols-2 md:gap-2 gap-1", classNames)}
    >
      <div className="flex md:h-[400px] md:max-h-[400px] h-[150px] max-h-[170px]">
        {news[0] && <NewsCardImage newsInfo={news[0]} />}
      </div>
      <div className="flex flex-col md:max-h-[400px] max-h-[320px] min-h-[200px] md:gap-2 gap-1">
        {(news[1] || news[2]) && (
          <div className="flex md:gap-2 gap-1 w-full h-full">
            {news[1] && (
              <NewsCardImage
                newsInfo={news[1]}
                classNames={smallNewsImageCard}
              />
            )}
            {news[2] && (
              <NewsCardImage
                newsInfo={news[2]}
                classNames={smallNewsImageCard}
              />
            )}
          </div>
        )}
        {(news[3] || news[4]) && (
          <div className="flex md:gap-2 gap-1 w-full h-full">
            {news[3] && (
              <NewsCardImage
                newsInfo={news[3]}
                classNames={smallNewsImageCard}
              />
            )}
            {news[4] && (
              <NewsCardImage
                newsInfo={news[4]}
                classNames={smallNewsImageCard}
              />
            )}
          </div>
        )}
        {(news[5] || news[6]) && (
          <div className="md:flex hidden md:gap-2 gap-1 w-full h-full">
            {news[5] && (
              <NewsCardImage
                newsInfo={news[5]}
                classNames={smallNewsImageCard}
              />
            )}
            {news[6] && (
              <NewsCardImage
                newsInfo={news[6]}
                classNames={smallNewsImageCard}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export {
  NewsBar,
  NewsCardImage,
  NewsCard,
  SuggestedNews,
  PreRenderNewsPage,
  TopNews,
};

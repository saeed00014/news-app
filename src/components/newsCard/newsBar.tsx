import { merge } from "@/lib/utils";
import Image from "next/image";
import testNews from "@/assets/testNews.webp";
import persian from "@/assets/data";
import { NewsInfo } from "@/types/types";

type Props = {
  newsInfo: NewsInfo;
  classNames?: string;
};

const NewsBar = ({ newsInfo, classNames }: Props) => {
  return (
    <article
      className={merge("flex items-center h-full w-full bg-ship", classNames)}
    >
      <div className="md:flex md:flex-row flex-col items-center">
        <Image
          alt="dolar news"
          layout="intrisic"
          objectFit="cover"
          className="md:w-[50%]"
          src={testNews}
        />
        <div className="flex flex-col justify-end w-full h-full md:px-3 px-2 md:pb-0 pb-1 md:gap-1">
          <h2 className="text-dark md:text-[1rem] text-[.8rem]">
            {persian.newsH2Tag}
          </h2>
          <p className="text-dark md:text-[1rem] text-[.9rem] font-semibold">
            {persian.newsPTag}
          </p>
        </div>
      </div>
    </article>
  );
};

export default NewsBar;

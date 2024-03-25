import Image from "next/image";
import testNews from "@/assets/testNews.webp";
import persian from "@/assets/data";
import { merge } from "@/lib/utils";
import Category from "../category";
import { NewsInfo } from "@/types/types";

type Props = {
  newsInfo: NewsInfo,
  classNames?: string
}

const NewsCard = ({newsInfo, classNames}: Props) => {
  return (
    <article className={merge("flex rounded-[.3rem] overflow-hidden", classNames)}>
      <div className="relative flex">
        <Image 
          alt="dolar news"
          layout="intrisic"
          className="object-cover"
          src={testNews} 
        />
        <div className="absolute bottom-0 flex flex-col justify-end w-full h-full px-3 pb-5 bg-ashImage gap-1">
          <Category text={persian.newsCategory} />
          <h2 className="text-ship">{persian.newsH2Tag}</h2>
          <p className="text-ship font-semibold">{persian.newsPTag}</p>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;

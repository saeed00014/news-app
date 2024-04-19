import persian from "@/assets/data";
import Link from "next/link";

const ReadMore = ({
  readMore,
}: {
  readMore: { link: string; text: string };
}) => {
  return (
    <Link
      href={`/news/${readMore.link}`}
      className="group relative flex md:flex-row flex-col w-full pl-2 pr-4 py-3 bg-moon border border-ash gap-1 cursor-pointer"
    >
      <span className="md:text-[1rem] text-[.9rem] font-semibold">
        {persian.readmore} : {readMore.text}
      </span>
      <span className="absolute right-0 top-0 bottom-0 flex w-[.5rem] bg-grass"></span>
    </Link>
  );
};

export default ReadMore;

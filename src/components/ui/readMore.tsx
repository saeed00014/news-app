import persian from "@/assets/data";

const ReadMore = () => {
  return (
    <div className="group relative flex md:flex-row flex-col w-full pl-2 pr-4 py-3 bg-moon border border-ash gap-1 cursor-pointer">
      <span className="md:text-[1rem] text-[.9rem] font-semibold">{persian.readmore} : قیمت اسکناس دلار روز دوشنبه 6 فروردین 1403 در مرکز مب</span>
      <span className="absolute right-0 top-0 bottom-0 flex w-[.5rem] bg-grass"></span>
    </div>
  );
};

export default ReadMore;

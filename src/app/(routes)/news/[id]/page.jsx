import NewsPage from "../_news/newsPage";

const page = () => {
  return (
    <section className="fixed lg:right-4 right-2 lg:left-4 left-2 lg:top-[85px] top-[73px] lg:bottom-0 bottom-[73px] flex justify-center">
      <div className="flex flex-col lg:p-0 p-2 w-full h-full max-w-[1000px] bg-ship md:gap-4 gap-2 overflow-y-auto no-scrollbar">
        <NewsPage />
      </div>
    </section>
  );
};

export default page;

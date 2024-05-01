import NewsPage from "../_news/newsPage";

const page = () => {
  return (
    <section className="flex w-full lg:p-0 p-2 justify-center max-w-[1400px] h-full">
      <div className="flex flex-col w-full h-full max-w-[1000px] bg-ship overflow-y-auto no-scrollbar">
        <NewsPage />
      </div>
    </section>
  );
};

export default page;

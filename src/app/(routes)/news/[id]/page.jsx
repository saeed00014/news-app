import NewsPage from "../_news/newsPage";

const page = () => {
  return (
    <section className="flex w-full max-w-[1400px] h-full bg-ship">
      <div className="flex flex-col w-full max-w-[1000px] overflow-y-auto overflow-x-hidden">
        <NewsPage />
      </div>
    </section>
  );
};

export default page;

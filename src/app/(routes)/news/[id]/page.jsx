import NewsPage from "../_news/newsPage";

const page = () => {
  return (
    <section className="flex w-full justify-center max-w-[1400px] h-full overflow-hidden">
      <div className="flex flex-col w-full h-full max-w-[1000px] bg-ship overflow-y-auto">
        <NewsPage />
      </div>
    </section>
  );
};

export default page;

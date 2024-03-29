import { NewsBar, NewsCard, NewsCardImage } from "@/components/ui/news"
import SectionSpliter from "@/components/ui/sectionSpliter"
import TopNews from "../../home/topNews"

const Category = () => {
  const testNewsInfo = {
    image: "",
    category: "",
    title: "",
    descriptoin: "",
  };

  return (
    <section className="flex flex-col justify-center lg:p-0 p-2 lg:mt-0 mt-2 lg:mx-0 mx-2 gap-4 bg-ship">
      <TopNews />
      <div className="flex flex-col gap-4 px-4">
        <NewsBar newsInfo={testNewsInfo} />
        <NewsBar newsInfo={testNewsInfo} />
        <NewsBar newsInfo={testNewsInfo} />
      </div>
    </section>
  )
}

export default Category
import persian from "@/assets/data";
import useColorPicker from "@/hooks/useColorPicker";
import { merge } from "@/lib/utils";

const SectionSpliter = ({ text }: { text: string }) => {
  const classNames = useColorPicker(text);

  return (
    <div
      className={merge(
        "flex items-top w-full h-[6rem] md:px-3 px-2 md:pt-2 pt-1 md:text-[1.2rem] text-[1rem] text-ship bg-yellow-400",
        classNames
      )}
    >
      {persian.newsCategory}
    </div>
  );
};

export default SectionSpliter;

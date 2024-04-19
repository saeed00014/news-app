import useColorPicker from "@/hooks/useColorPicker";
import { merge } from "@/lib/utils/merge";

const SectionSpliter = ({ category }: { category: string }) => {
  const classNames = useColorPicker(category);

  return (
    <div
      className={merge(
        "flex items-top w-full md:px-3 px-2 md:py-[.1rem] md:pt-[.4rem] pt-1 -mb-1 md:text-[1.2rem] text-[.9rem] text-ship bg-yellow-400",
        classNames
      )}
    >
      {category}
    </div>
  );
};

export default SectionSpliter;

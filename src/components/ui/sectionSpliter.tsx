import useColorPicker from "@/hooks/useColorPicker";
import { merge } from "@/lib/utils/merge";

const SectionSpliter = ({ category }: { category: string }) => {
  const classNames = useColorPicker(category);

  return (
    <div
      className={merge(
        "flex items-top w-full md:px-3 px-2 py-[.1rem] pt-[.4rem] md:text-[1.2rem] text-[1rem] text-ship bg-yellow-400",
        classNames
      )}
    >
      {category}
    </div>
  );
};

export default SectionSpliter;

import { merge } from "@/lib/utils";
import { IoArrowForward } from "react-icons/io5";

type Props = {
  setEvent: React.Dispatch<React.SetStateAction<boolean>>;
  classNames?: string;
};

const BackBtn = ({ setEvent, classNames }: Props) => {
  return (
    <div
    onClick={() => setEvent(prev => !prev)}
    className={merge(
      "flex items-center p-[.2rem] w-fit text-[1.4rem] rounded-full cursor-pointer",
      classNames
    )}
  >
    <IoArrowForward />
  </div>
  )
}

export default BackBtn
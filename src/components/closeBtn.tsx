import { merge } from "@/lib/utils/merge";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  setEvent: any;
  classNames?: string;
};

const CloseBtn = ({ setEvent, classNames }: Props) => {
  return (
    <div
      onClick={() => setEvent(false)}
      className={merge(
        "px-[.8rem] py-[.8rem] w-fit hover:bg-ash rounded-full cursor-pointer",
        classNames
      )}
    >
      <AiOutlineClose />
    </div>
  );
};

export default CloseBtn;

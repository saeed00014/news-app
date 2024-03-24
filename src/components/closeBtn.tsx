import { merge } from "@/lib/utils";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  setEvent: Function;
  classNames?: string;
};

const CloseBtn = ({ setEvent, classNames }: Props) => {
  return (
    <div
      onClick={() => setEvent(false)}
      className={merge(
        "px-[.8rem] py-[.8rem] hover:bg-ash rounded-full cursor-pointer",
        classNames
      )}
    >
      <AiOutlineClose />
    </div>
  );
};

export default CloseBtn;

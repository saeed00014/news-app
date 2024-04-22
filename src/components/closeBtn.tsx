import { merge } from "@/lib/utils/merge";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  setEvent: any;
  text?: string | undefined;
  classNames?: string;
};

const CloseBtn = ({ setEvent, text, classNames }: Props) => {
  return (
    <div className={merge("flex w-fit h-fit", classNames)}>
      {text && <span className="flex items-center">{text}</span>}
      <span
        className=" hover:bg-ash text-dark px-[.8rem] py-[.8rem] rounded-full cursor-pointer z-[60]"
        onClick={() => setEvent(false)}
      >
        <AiOutlineClose />
      </span>
    </div>
  );
};

export default CloseBtn;

import { MessageSqlType } from "@/types/types";
import Link from "next/link";

type Props = {
  message: MessageSqlType;
  handleClick: Function;
  isMyMessage: boolean;
};

const MessageText = ({ message, handleClick, isMyMessage }: Props) => {
  return (
    <div
      className={`relative flex items-center w-full gap-1 ${
        isMyMessage ? "flex-row-reverse [&>div>span]:bg-darkgrass" : ""
      }`}
    >
      <div className="flex flex-col w-fit max-w-[20rem] text-ship gap-1">
        {message?.attached_id && (
          <Link
            href={`#message${message.attached_id}`}
            replace={true}
            className="flex pt-2 pb-4 px-2 rounded-t-[.8rem] text-[.8rem] -mb-3 bg-dark/40 hover:bg-dark/50 cursor-pointer "
          >
            {message.attached}
          </Link>
        )}
        <span
          onClick={() => handleClick({ message: message, mutateble: false })}
          className="flex py-2 px-3 gap-10 min-w-max  rounded-[.8rem] bg-darkwater"
        >
          {message.text}
        </span>
      </div>
    </div>
  );
};

export default MessageText;

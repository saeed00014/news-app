"use client";
import { merge } from "@/lib/utils";
import { RiPencilFill } from "react-icons/ri";

type Props = {
  id: "chatOptoins";
  setEvent: React.Dispatch<React.SetStateAction<boolean>>;
  event: boolean;
  classNames?: string;
};

const PencilButton = ({ id, event, setEvent, classNames }: Props) => {
  return (
    <button
      id={id}
      onClick={() => setEvent(!event)}
      className={merge(
        "absolute p-4 text-[1.2rem] rounded-full bg-grass shadow-2xl text-ship hover:brightness-110 duration-100",
        classNames
      )}
    >
      <RiPencilFill className="pointer-events-none" />
    </button>
  );
};

export default PencilButton;

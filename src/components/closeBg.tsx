import { merge } from "@/lib/utils";

type Props = {
  setEvent: Function;
  classNames?: string;
};

const CloseBg = ({ setEvent, classNames }: Props) => {
  return (
    <div
      onClick={() => setEvent(false)}
      className={merge(
        "fixed right-0 top-0 bottom-0 left-0 bg-ash/65 z-40",
        classNames
      )}
    ></div>
  );
};

export default CloseBg;

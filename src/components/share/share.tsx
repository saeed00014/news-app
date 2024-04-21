"use client";
import Footer from "./footer";
import Context from "./context";
import CloseBg from "../closeBg";
import ShareHead from "./shareHead";

type Props = {
  setIsShareActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const Share = ({ setIsShareActive }: Props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center z-[60]">
      <CloseBg setEvent={setIsShareActive} />
      <div className="flex flex-col w-full max-w-[550px] rounded-[1rem] bg-ship z-[60]">
        <Context>
          <ShareHead setIsShareActive={setIsShareActive} />
          <Footer />
        </Context>
      </div>
    </div>
  );
};

export default Share;

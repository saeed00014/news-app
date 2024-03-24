import { HiOutlineMenuAlt4 } from "react-icons/hi";

type Props = {
  showNaveBar: Function;
};

const HamburgerIcon = ({ showNaveBar }: Props) => {
  return (
    <div
      onClick={() => showNaveBar(true)}
      className="lg:hidden flex flex-col items-center justify-center gap-[.4rem] min-h-max cursor-pointer"
    >
      <HiOutlineMenuAlt4 className="md:text-5xl text-4xl" />
    </div>
  );
};

export default HamburgerIcon;

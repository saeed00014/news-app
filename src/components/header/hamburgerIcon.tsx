import { HiOutlineMenuAlt4 } from "react-icons/hi";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerIcon = ({ setIsOpen }: Props) => {
  return (
    <div
      onClick={() => setIsOpen(true)}
      className="lg:hidden flex flex-col items-center justify-center gap-[.4rem] min-h-max cursor-pointer"
    >
      <HiOutlineMenuAlt4 className="text-5xl " />
    </div>
  );
};

export default HamburgerIcon;

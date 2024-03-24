import persian from "@/assets/data";
import Image from "next/image";
import logoImage from "@/assets/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center pr-1 pl-8 min-w-max gap-3">
      <Image height={40} width={40} src={logoImage} alt="logo image" />
      <span className="text-blood">
        {persian.logoText}
      </span>
    </Link>
  );
};

export default Logo;

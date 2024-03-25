import persian from "@/assets/data";
import Image from "next/image";
import testAdd from "@/assets/testAdd2.gif"

const AddCard = () => {
  return (
    <div className="relatuve fixed right-2 top-[35%] xxl:flex hidden p-2 h-[12rem] w-[15rem] bg-ship rounded-[.4rem] border-2 border-blood">
      <div className="flex mb-8">
        <Image 
          alt={persian.adds}
          layout="intrisic"
          className="object-contain"
          src={testAdd}
        />
      </div>
      <button className="absolute bottom-2 right-2 left-2 flex justify-center items-center bg-ash text-ship rounded-[.4rem]">{persian.veiwAll}</button>
    </div>
  );
};

export default AddCard;

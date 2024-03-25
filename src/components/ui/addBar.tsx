import persian from "@/assets/data"
import Image from "next/image"
import addImage from "@/assets/testAdd.gif"

const AddBar = () => {
  return (
    <div className="relative flex items-center justify-center w-full md:h-[4rem] h-[3rem] border-2 border-blood">
      <Image 
        alt={persian.adds}
        layout="fill"
        unoptimized
        src={addImage}
      />
    </div>
  )
}

export default AddBar
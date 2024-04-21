"use client";
import { useDropzone } from "react-dropzone";
import { Label } from "./ui/inputs";
import Image from "next/image";
import persian from "@/assets/data";

type Props = {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  currentImage: string;
  lable: string;
};

const ImageDragDrop = ({ setImage, currentImage, lable }: Props) => {
  const onDrop = (acceptedFile: any) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader?.result?.toString() || "");
    };
    fileReader.readAsDataURL(acceptedFile[0]);
  };

  const { getRootProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <div className="relative flex flex-col w-full h-fit">
      <Label id="uploadImage" text={lable} />
      <label
        {...getRootProps()}
        id="uploadImage"
        className={`relative flex justify-center items-center p-2 w-full h-[8rem] bg-darkmoon ${
          isDragActive && "brightness-90"
        }`}
      >
        <span className="absolute text-[.9rem]">{persian.dragFile}</span>
        {currentImage && (
          <Image
            alt="profile Image"
            width={112}
            height={112}
            src={currentImage}
            className="w-[7rem] h-[7rem] object-cover rounded-full z-10"
          />
        )}
      </label>
    </div>
  );
};
export default ImageDragDrop;

"use client";
import { useContext } from "react";
import Button from "./button";
import persian from "@/assets/data";
import Edit from "../_editForm/edit";
import { ProfileContext } from "@/context/context";

const EditButton = () => {
  const { isEditActive, setIsEditActive } = useContext(ProfileContext);

  return (
    <>
      <div className="w-full" onClick={() => setIsEditActive(true)}>
        <Button text={persian.edit} />
      </div>
      {isEditActive && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-50">
          <Edit />
        </div>
      )}
    </>
  );
};

export default EditButton;

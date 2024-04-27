import React, { useEffect } from "react";
import PopUp from "./ui/popUp";
import { createPortal } from "react-dom";

type Props = {
  isPopUp: boolean;
  setIsPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    text: string;
    success: boolean;
    classNames?: string;
  };
};

const PopUpTimer = ({ isPopUp, setIsPopUp, content }: Props) => {
  useEffect(() => {
    setTimeout(() => {
      isPopUp && setIsPopUp(false);
    }, 2000);
  }, [isPopUp]);
  const popUpStack = document.getElementById("PopUpStack");
  return (
    popUpStack &&
    createPortal(
      <PopUp
        text={content.text}
        success={content.success}
        classNames={content.classNames}
      />,
      popUpStack
    )
  );
};

export default PopUpTimer;

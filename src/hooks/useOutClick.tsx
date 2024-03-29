import React, { ReactNode, SyntheticEvent, useRef } from "react";

type Props = {
  children: ReactNode;
  eventFunc: Function;
  id: string;
};

const UseOutClick = ({ children, eventFunc, id }: Props) => {
  const handleClick = (e: any) => {
    if (e.target?.id != id) {
      eventFunc();
    }
  };

  document.addEventListener("click", handleClick, true);

  return <>{children}</>;
};

export default UseOutClick;

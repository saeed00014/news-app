import React, { useState } from "react";
import { MessengerContext } from "@/context/context";

const Context = ({ children }: { children: React.ReactNode }) => {
  const [current, setCurrent] = useState();

  return (
    <MessengerContext.Provider value={{ current, setCurrent }}>
      {children}
    </MessengerContext.Provider>
  );
};

export default Context;

import persian from "@/assets/data";
import { merge } from "@/lib/utils/merge";
import React from "react";

type Props = {
  text?: string;
  classNames?: string;
};

const NoResult = ({ text, classNames }: Props) => {
  const textt = text ? text : persian.noResult
  return <div className={merge(classNames)}>{textt}</div>;
};

export default NoResult;

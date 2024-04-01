import { merge } from "@/lib/utils/merge";
import React from "react";

const NoResult = ({ classNames }: { classNames?: string }) => {
  return <div className={merge(classNames)}>هیچ نتیجه ای وجود ندارد</div>;
};

export default NoResult;

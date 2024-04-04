"use client";
import React from "react";
import ThemeSwitcher from "@/providers/themeSwitcher";
import ErrorBoundaries from "@/providers/errorBoundaries";
import ReactQuery from "@/providers/reactQuery";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundaries>
      <ReactQuery>
        {children}
      </ReactQuery>
    </ErrorBoundaries>
  );
};

export default Providers;

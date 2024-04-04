"use client";
import React from "react";
import ThemeMode from "@/providers/themeMode";
import ErrorBoundaries from "@/providers/errorBoundaries";
import ReactQuery from "@/providers/reactQuery";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundaries>
      <ReactQuery>
        <ThemeMode>{children}</ThemeMode>
      </ReactQuery>
    </ErrorBoundaries>
  );
};

export default Providers;

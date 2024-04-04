"use client";
import React from "react";
import ThemeSwitcher from "@/providers/themeSwitcher";
import ErrorBoundaries from "@/providers/errorBoundaries";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundaries>
      {children}
    </ErrorBoundaries>
  );
};

export default Providers;

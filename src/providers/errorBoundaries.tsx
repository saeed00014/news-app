import ErrorPage from "@/components/errorPage";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaries = ({ children }: { children: React.ReactNode }) => {
  return (
    <ErrorBoundary
      fallback={<ErrorPage />}
      onError={(error) => {
        //logs error to loging system
        console.log(error);
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaries;

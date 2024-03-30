import React, { useState } from "react";
import LoginForm from "./loginForm";
import { loginFormSchema } from "@/lib/zodSchema";

type UserLoginInfo = {
  username: string;
  password: string;
};

export const useSubmitLogin = () => {
  const [networkError, setNetworkError] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const onSubmit = ({
    username: username,
    password: password,
  }: UserLoginInfo) => {
    try {
      loginFormSchema.parse({
        username: username,
        password: password,
      });
    } catch {
      setLoginError(true);
    }
  };

  return { onSubmit, networkError, loginError };
};

export const Login = () => {
  const { onSubmit, networkError, loginError } = useSubmitLogin();
  return (
    <LoginForm
      onSubmit={onSubmit}
      networkError={networkError}
      loginError={loginError}
    />
  );
};

import React, { useState } from "react";
import LoginForm from "./loginForm";
import { loginFormSchema } from "@/lib/zodSchema";
import { AxiosResponse } from "axios";
import { baseURL } from "@/axios/axios";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

type UserLoginInfo = {
  username: string;
  password: string;
};

export const useSubmitLogin = () => {
  const [networkError, setNetworkError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const postLoginInfo = useMutation({
    mutationFn: async (userLoginInfo: UserLoginInfo) => {
      try {
        setLoading(true);
        const response: AxiosResponse = await baseURL.post(
          "/auth",
          userLoginInfo
        );
        setLoading(false);
        setNetworkError(false);
        if (response.data.login) {
          setLoginError(false);
          location.replace("/")
          return;
        }
        setLoginError(true);
      } catch (error: any) {
        setLoading(false);
        if (error.response.status === 404) {
          setLoginError(true);
          return;
        }
        setNetworkError(true);
      }
    },
  });

  const onSubmit = ({
    username: username,
    password: password,
  }: UserLoginInfo) => {
    try {
      loginFormSchema.parse({
        username: username,
        password: password,
      });
      postLoginInfo.mutate({
        username,
        password,
      });
    } catch {
      setLoginError(true);
    }
  };

  return { onSubmit, networkError, loginError, loading };
};

export const Login = () => {
  const { onSubmit, networkError, loginError, loading } = useSubmitLogin();
  return (
    <LoginForm
      onSubmit={onSubmit}
      networkError={networkError}
      loginError={loginError}
      loading={loading}
    />
  );
};

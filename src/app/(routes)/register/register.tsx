"use client";
import React, { useState } from "react";
import RegisterForm from "./registerForm";
import Cookies from "universal-cookie";
import { useMutation } from "@tanstack/react-query";
import { NewUserType } from "@/types/types";
import { AxiosResponse } from "axios";
import { baseURL } from "@/axios/axios";
import { useRouter } from "next/navigation";

export const useSubmitRegister = () => {
  const [confPassError, setConfPassError] = useState(false);
  const [emailRepeatedError, setEmailRepeatedError] = useState(false);
  const [usernameRepeatedError, setUsernameRepeatedError] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const postNewUser = useMutation({
    mutationFn: async (newUser: NewUserType) => {
      try {
        setLoading(true);
        const response: AxiosResponse = await baseURL.post("/users", newUser);
        setNetworkError(false);
        if (response.data.repeated?.includes("email")) {
          setEmailRepeatedError(true);
          setUsernameRepeatedError(false);
          setLoading(false);
          return;
        }
        if (response.data.repeated?.includes("usename")) {
          setUsernameRepeatedError(true);
          setEmailRepeatedError(false);
          setLoading(false);
          return;
        }

        setEmailRepeatedError(false);
        setUsernameRepeatedError(false);

        const cookies = new Cookies();
        cookies.set("user", response.data.user, { path: "/" });
        setLoading(false);
        router.push("/")
        
      } catch (error) {
        setLoading(false)
        setNetworkError(true);
      }
    },
  });

  const onSubmit = ({ getValues }: { getValues: Function }) => {
    const values = getValues();
    if (values.password !== values.confirmPass) {
      setConfPassError(true);
      return null;
    }
    setConfPassError(false);
    postNewUser.mutate({
      username: values.username,
      email: values.email,
      name: `${values.firstname} ${values.lastname}`,
      gender: values.gender,
      birthdate: `${values.year}/${values.mounth}/${values.day}`,
      password: values.password,
    });
  };

  return {
    onSubmit,
    confPassError,
    emailRepeatedError,
    usernameRepeatedError,
    networkError,
    loading
  };
};

const Register = () => {
  const {
    onSubmit,
    confPassError,
    emailRepeatedError,
    usernameRepeatedError,
    networkError,
    loading
  } = useSubmitRegister();
  return (
    <RegisterForm
      onSubmit={onSubmit}
      confPassError={confPassError}
      emailRepeatedError={emailRepeatedError}
      usernameRepeatedError={usernameRepeatedError}
      networkError={networkError}
      loading={loading}
    />
  );
};

export default Register;

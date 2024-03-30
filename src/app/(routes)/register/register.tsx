"use client";
import React, { useState } from "react";
import RegisterForm from "./registerForm";

export const useSubmitRegister = () => {
  const [confPassError, setConfPassError] = useState(false);
  const [emailRepeatedError, setEmailRepeatedError] = useState(false);
  const [usernameRepeatedError, setUsernameRepeatedError] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const onSubmit = ({ getValues }: { getValues: Function }) => {
    const values = getValues();
    if (values.password !== values.confirmPass) {
      setConfPassError(true);
      return null;
    }
    setConfPassError(false);
  };

  return {
    onSubmit,
    confPassError,
    emailRepeatedError,
    usernameRepeatedError,
    networkError,
  };
};

const Register = () => {
  const {
    onSubmit,
    confPassError,
    emailRepeatedError,
    usernameRepeatedError,
    networkError,
  } = useSubmitRegister();
  return (
    <RegisterForm
      onSubmit={onSubmit}
      confPassError={confPassError}
      emailRepeatedError={emailRepeatedError}
      usernameRepeatedError={usernameRepeatedError}
      networkError={networkError}
    />
  );
};

export default Register;

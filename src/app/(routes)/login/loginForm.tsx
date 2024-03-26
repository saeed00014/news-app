import React from "react";
import { useForm } from "react-hook-form";
import persian from "@/assets/data";
import Input from "@/components/ui/input";
import ErrorText from "@/components/ui/errorText";
import { TextLink } from "@/components/ui/link";

type Props = {
  onSubmit: Function;
  networkError: boolean;
  loginError: boolean;
};

const LoginForm = ({ onSubmit, networkError, loginError }: Props) => {
  const { register, handleSubmit, getValues } = useForm({
    mode: "onSubmit",
  });

  return (
    <form
      className="flex flex-col gap-3 w-fit h-fit bg-ship shadow-xl p-4 pt-2 rounded-[.5rem]"
      onSubmit={handleSubmit(() =>
        onSubmit({
          username: getValues("username"),
          password: getValues("password"),
        })
      )}
    >
      <span className="text-2xl">{persian.submit}</span>
      <Input
        register={register}
        type="text"
        name="username"
        id="username"
        placeholder={persian.username}
        isIconError={false}
        classNames="h-12 w-[20rem] bg-moon dark:bg-gray-700"
      />
      <Input
        register={register}
        type="password"
        name="password"
        id="password"
        placeholder={persian.pass}
        isIconError={false}
        classNames="h-12 bg-moon dark:bg-gray-700"
      />
      {loginError && <ErrorText text={persian.errorMessage} />}
      {networkError && <ErrorText text={persian.networkErrorMessage} />}
      <input
        type="submit"
        value={persian.submit}
        className="flex justify-center py-2 w-full text-ship rounded-[.2rem] bg-darkwater hover:brightness-110 cursor-pointer"
      />
      <TextLink path="/register" text={persian.register} classNames="flex justify-center py-2 bg-grass rounded-[.2rem] text-ship hover:brightness-110" />
    </form>
  );
};

export default LoginForm;

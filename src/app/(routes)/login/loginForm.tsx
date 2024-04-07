import React from "react";
import { useForm } from "react-hook-form";
import persian from "@/assets/data";
import { Input } from "@/components/ui/inputs";
import { ErrorText } from "@/components/ui/errors";
import { TextLink } from "@/components/ui/link";
import LoadingSpin from "@/components/loadingSpin";

type Props = {
  onSubmit: Function;
  networkError: boolean;
  loginError: boolean;
  loading: boolean;
};

const LoginForm = ({ onSubmit, networkError, loginError, loading }: Props) => {
  const { register, handleSubmit, getValues } = useForm({
    mode: "onSubmit",
  });

  return (
    <form
      method="post"
      className="flex flex-col gap-3 w-fit h-fit bg-ship shadow-2xl p-4 pt-2 rounded-[.5rem] max-w-[355px]"
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
        classNames="h-12 w-[20rem] bg-moon"
      />
      <Input
        register={register}
        type="password"
        name="password"
        id="password"
        placeholder={persian.pass}
        isIconError={false}
        classNames="h-12 bg-moon"
      />
      {loginError && <ErrorText text={persian.errorMessage} />}
      {networkError && <ErrorText text={persian.networkErrorMessage} />}
      <div className="relative items-center w-full ">
        <input
          type="submit"
          value={persian.submit}
          className="flex justify-center py-2 w-full text-ship rounded-[.2rem] bg-darkwater hover:brightness-110 cursor-pointer"
        />
        {loading && (
          <LoadingSpin classNames="absolute top-2 right-2 min-w-[1.5rem] w-[1.5rem] h-[1.5rem] border-ship border-l-transparent" />
        )}
      </div>
      <TextLink
        path="/register"
        text={persian.register}
        classNames="flex justify-center py-2 bg-grass rounded-[.2rem] text-ship hover:brightness-110"
      />
    </form>
  );
};

export default LoginForm;

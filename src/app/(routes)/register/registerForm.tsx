import React from "react";
import {
  selectOptionsDays,
  selectOptionsMounths,
  selectOptionsYears,
} from "@/assets/data";
import persian from "@/assets/data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "@/lib/zodSchema";
import { Input } from "@/components/ui/inputs";
import { ErrorIcon } from "@/components/ui/errors";
import { Label } from "@/components/ui/inputs";
import { Radio } from "@/components/ui/inputs";
import { Select } from "@/components/ui/inputs";
import { ErrorText } from "@/components/ui/errors";
import FormItem from "@/components/ui/formItem";
import LoadingSpin from "@/components/loadingSpin";

type Props = {
  onSubmit: Function;
  confPassError: boolean;
  emailRepeatedError: boolean;
  usernameRepeatedError: boolean;
  networkError: boolean;
  loading: boolean;
};

const RegisterForm = ({
  onSubmit,
  confPassError,
  emailRepeatedError,
  usernameRepeatedError,
  networkError,
  loading,
}: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      year: 1403,
      gender: "",
      password: "",
      confirmPass: "",
    },
    resolver: zodResolver(registerFormSchema),
    mode: "all",
  });

  return (
    <form
      onSubmit={handleSubmit(() => onSubmit({ getValues }))}
      className="flex flex-col items-center md:mx-0 mx-2 bg-ship md:gap-4 gap-2 shadow-xl md:p-4 p-2 md:pt-4 md:w-[400px] md:max-w-[initial] max-w-[350px] h-fit rounded-[.5rem]"
    >
      <div className="flex justify-start w-full text-2xl">
        {persian.register}
      </div>
      <div className="flex md:gap-3 gap-1">
        <FormItem>
          <Input
            register={register}
            type="name"
            id="firstname"
            name="firstname"
            placeholder={persian.name}
            isIconError={errors?.firstname}
          />
          {errors?.firstname && <ErrorIcon text={persian.fillErorr} />}
        </FormItem>
        <FormItem>
          <Input
            register={register}
            type="lastname"
            id="lastname"
            name="lastname"
            placeholder={persian.lastname}
            isIconError={errors?.lastname}
          />
          {errors?.lastname && <ErrorIcon text={persian.fillErorr} />}
        </FormItem>
      </div>
      <FormItem>
        <Input
          register={register}
          type="text"
          id="email"
          name="email"
          placeholder={persian.email}
          isIconError={errors?.email}
        />
        {errors?.email && <ErrorIcon text={persian.emailErorr} />}
        {emailRepeatedError && <ErrorText text={persian.emailRepeated} />}
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="text"
          id="username"
          name="username"
          placeholder={persian.username}
          isIconError={errors?.username}
        />
        {errors?.username && <ErrorIcon text={persian.usernameErorr} />}
        {usernameRepeatedError && <ErrorText text={persian.usernameRepeated} />}
      </FormItem>
      <FormItem>
        <FormItem>
          <Label text={persian.birthDate} />
          {errors?.year && <ErrorIcon text={persian.birthErorr} />}
        </FormItem>
        <FormItem classNames="flex-row md:gap-3 gap-1">
          <Select
            register={register}
            id="day"
            name="day"
            options={selectOptionsDays}
            classNames="md:h-10 h-8"
          />
          <Select
            register={register}
            id="mounth"
            name="mounth"
            options={selectOptionsMounths}
            classNames="md:h-10 h-8"
          />
          <Select
            register={register}
            id="year"
            name="year"
            options={selectOptionsYears}
            classNames="md:h-10 h-8"
          />
        </FormItem>
      </FormItem>
      <FormItem>
        <FormItem>
          <Label text={persian.gender} />
          {errors?.gender && (
            <ErrorIcon text={persian.genderErorr} classNames="top-0" />
          )}
        </FormItem>
        <FormItem classNames="flex-row">
          <FormItem classNames="flex-row px-4 md:h-10 h-8 border border-dark bg-ship">
            <Label id="male" text={persian.male} classNames="h-full" />
            <Radio
              register={register}
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
          </FormItem>
          <FormItem classNames="flex-row px-4 md:h-10 h-8 border border-dark bg-ship">
            <Label id="female" text={persian.female} classNames="h-full " />
            <Radio
              register={register}
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
          </FormItem>
        </FormItem>
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="password"
          id="password"
          name="password"
          placeholder={persian.pass}
          isIconError={errors?.password}
        />
        {errors?.password && <ErrorIcon text={persian.passErorr} />}
      </FormItem>
      <FormItem>
        <Input
          register={register}
          type="password"
          id="confirmPass"
          name="confirmPass"
          placeholder={persian.passRepeat}
          isIconError={errors?.confirmPass}
        />
        {errors?.confirmPass && <ErrorIcon text={persian.passRepeatErorr} />}
      </FormItem>
      {confPassError && <ErrorText text={persian.passRepeatedErorr} />}
      {networkError && <ErrorText text={persian.networkErrorMessage} />}
      <div className="relative flex items-center w-full">
        <input
          type="submit"
          value={persian.register}
          className="flex justify-center py-2 w-full rounded-[.2rem] bg-grass hover:brightness-110 text-ship cursor-pointer"
        />
        {loading && (
          <LoadingSpin classNames="absolute right-2 w-[1.5rem] min-w-[1.5rem] h-[1.5rem] border-ship border-l-transparent" />
        )}
      </div>
    </form>
  );
};

export default RegisterForm;

"use client";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProfileContext } from "@/context/context";
import ImageDragDrop from "@/components/imageDragDrop";
import LoadingSpin from "@/components/loadingSpin";
import CloseBackground from "@/components/closeBg";
import { Input } from "@/components/ui/inputs";
import { Label } from "@/components/ui/inputs";
import { Submit } from "@/components/ui/inputs";
import { Textarea } from "@/components/ui/inputs";
import { MaxChar } from "@/components/ui/inputs";
import FormItem from "@/components/ui/formItem";
import { ErrorText } from "@/components/ui/errors";
import { ErrorIcon } from "@/components/ui/errors";
import { editUserSchema } from "@/lib/zodSchema";
import { editFormInputClassNames } from "@/lib/utils/styles";
import persian from "@/assets/data";
import CloseBtn from "@/components/closeBtn";

type Props = {
  onSubmit: Function;
  isEditLoading: boolean;
  networkError: boolean;
};

const EditForm = ({ onSubmit, isEditLoading, networkError }: Props) => {
  const { user, setIsEditActive } = useContext(ProfileContext);
  const [image, setImage] = useState(user?.image || "");
  const {
    handleSubmit,
    watch,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      name: user?.name,
      link: user?.link,
      bio: user?.bio,
      image: image,
    },
    resolver: zodResolver(editUserSchema),
    mode: "all",
  });

  return (
    <form
      onSubmit={handleSubmit(() => onSubmit({ image, getValues }))}
      className="flex flex-col items-center w-fit h-fit overflow-y-auto rounded-[1rem] z-50"
    >
      <CloseBackground setEvent={setIsEditActive} />
      <CloseBtn
        text={persian.edit}
        setEvent={setIsEditActive}
        classNames="sticky top-0 w-full justify-between py-1 px-4 bg-ship rounded-t-[1rem] z-50"
      />
      <div className="flex flex-col pb-5 px-4 w-full max-w-[400px] min-w-[400px] h-[80vh] max-h-[630px] gap-3 overflow-y-auto rounded-b-[1rem] bg-white z-50">
        <FormItem>
          <Label id="name" text={persian.name} />
          <Input
            register={register}
            type="text"
            name="name"
            id="name"
            isIconError={errors?.name}
            classNames={editFormInputClassNames}
          />
          {errors?.name && (
            <ErrorIcon
              text={persian.fillErorr}
              classNames="top-[.2rem] left-0 [&>span]:top-0 [&>span]:left-6"
            />
          )}
        </FormItem>
        <FormItem>
          <Label id="username" text={persian.username} />
          <Input
            register={register}
            type="text"
            name="username"
            id="username"
            isIconError={errors?.username}
            classNames={editFormInputClassNames}
          />
          {errors?.username && (
            <ErrorIcon
              text={persian.usernameErorr}
              classNames="top-[.2rem] left-0 "
            />
          )}
        </FormItem>
        <FormItem>
          <Label id="email" text={persian.email} />
          <Input
            register={register}
            type="text"
            name="email"
            id="email"
            isIconError={errors?.email}
            classNames={editFormInputClassNames}
          />
          {errors?.email && (
            <ErrorIcon
              text={persian.emailErorr}
              classNames="top-[.2rem] left-0  "
            />
          )}
        </FormItem>
        <FormItem>
          <Label id="link" text={persian.link} />
          <Input
            register={register}
            type="text"
            name="link"
            id="link"
            isIconError={errors?.link}
            classNames={editFormInputClassNames}
          />
          {errors?.link && (
            <ErrorIcon
              text={persian.fillErorr}
              classNames="top-[.2rem] left-0  "
            />
          )}
        </FormItem>
        <FormItem>
          <div className="flex w-full">
            <Label id="bio" text={persian.bio} />
            <div className="pt-1">
              <MaxChar maxChar={225} value={watch("bio")} />
            </div>
          </div>
          <Textarea
            register={register}
            name="bio"
            id="bio"
            isIconError={errors?.bio}
            classNames={editFormInputClassNames}
          />
          {errors?.bio && (
            <ErrorIcon
              text={persian.fillErorr}
              classNames="top-[.2rem] left-16"
            />
          )}
        </FormItem>
        <ImageDragDrop
          setImage={setImage}
          currentImage={image}
          lable={persian.avatar}
        />
        <div className="relative flex items-center gap-2">
          <Submit value={persian.submitEdit} />
          {isEditLoading && (
            <LoadingSpin classNames="absolute right-1 w-[1.6rem] min-w-[1.6rem] h-[1.6rem]" />
          )}
          {networkError && <ErrorText text={persian.networkErrorMessage} />}
        </div>
      </div>
    </form>
  );
};

export default EditForm;

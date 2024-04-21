"use client"
import { baseURL } from "@/axios/axios";
import { UserEditType } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import EditForm from "./editForm";
import { ProfileContext } from "@/context/context";

type Props = {
  image: string,
  background: string,
  getValues: Function
}

export const useSubmitEditForm = () => {
  const { user } = useContext(ProfileContext);
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const putUser = useMutation({
    mutationFn: async (editedValues: UserEditType) => {
      try {
        await baseURL.put(`/users?user_id=${user.id}`, editedValues);
        setNetworkError(false);
        setIsEditLoading(false);
        location.reload();
      } catch {
        setNetworkError(true);
        setIsEditLoading(false);
      }
    },
  });

  const onSubmit = ({image, getValues}: Props) => {
    console.log("values")
    const values = getValues();
    const editedValues = {
      username: values.username,
      email: values.email,
      name: values.name,
      link: values.link,
      bio: values.bio,
      image: image,
    };
    setIsEditLoading(true);
    putUser.mutate(editedValues);
  };

  return { onSubmit, isEditLoading, networkError };
};

const Edit = () => {
  const { onSubmit, isEditLoading, networkError } = useSubmitEditForm();

  return (
    <EditForm
      onSubmit={onSubmit}
      isEditLoading={isEditLoading}
      networkError={networkError}
    />
  );
};

export default Edit;

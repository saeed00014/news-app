"use client"
import { useContext } from "react";
import EditButton from "../_buttons/editButton";
import LogOut from "../_buttons/logOut";
import { ProfileContext } from "@/context/context";

const ProfileOptions = () => {
  const { isLoginUser } = useContext(ProfileContext);

  return (
    <>
      {isLoginUser && (
        <div className="flex gap-3">
          <EditButton />
          <LogOut />
        </div>
      )}
    </>
  );
};

export default ProfileOptions;

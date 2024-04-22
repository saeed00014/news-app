"use client";
import Image from "next/image";
import defaultImage from "@/assets/default.jpg";
import { useContext } from "react";
import { ProfileContext } from "@/context/context";
import { FaLink } from "react-icons/fa6";

const ProfileUser = () => {
  const { user } = useContext(ProfileContext);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center h-fit w-full gap-3">
        <Image
          alt="profile imege"
          width={70}
          height={70}
          className="rounded-full"
          src={user.image || defaultImage}
        />
        <div className="flex flex-col">
          <span>{user.name}</span>
          <span>{user.username}</span>
        </div>
      </div>
      {user.link && (
        <a
          href={`https://${user.link}`}
          target="_blank"
          className="flex items-center gap-2 hover:text-water"
        >
          <FaLink />
          {user.link}
        </a>
      )}
      <div className="flex w-full items-center min-h-[2rem] border-b border-b-ash text-[.9rem] ">
        {user.bio}
      </div>
    </div>
  );
};

export default ProfileUser;

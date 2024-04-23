"use client"
import { baseURL } from "@/axios/axios";
import Button from "./button";
import persian from "@/assets/data";

const useLogOut = () => {
  const handleLogOut = async () => {
    await baseURL.get("/auth/logout")
    location.reload()
  };

  return { handleLogOut };
};

const LogOut = () => {
  const { handleLogOut } = useLogOut();

  return (
    <div className="w-full" onClick={handleLogOut}>
      <Button text={persian.logOut} />
    </div>
  );
};

export default LogOut;

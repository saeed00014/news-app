import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const checkCookie = () => {
  const token = cookies().get("user")?.value || "";
  const userInfo: { id: string; username: string } = jwt.verify(
    token,
    process.env.JWT_SECTER,
    function (error, decode: any) {
      if (error) {
        throw new Error("login problem");
      }
      return { id: decode.id, username: decode.username };
    }
  );

  return userInfo;
};

export default checkCookie;

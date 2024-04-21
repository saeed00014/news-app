import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const checkCookie = () => {
  const token = cookies().get("user")?.value || "";
  const userInfo: { id: string; username: string } = jwt.verify(
    token,
    process.env.JWT_SECTER,
    function (error, decode: any) {
      if (error) {
        // return NextResponse.rewrite(new URL("/login"))
        return;
      }
      return { id: decode.id, username: decode.username };
    }
  );

  return userInfo;
};

export default checkCookie;

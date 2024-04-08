import { query } from "@/db/sqlDb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { tryCatch } from "@/lib/utils/tryCatch";
import { UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import jwt from "jsonwebtoken";
import GetCookieExpire from "@/hooks/getCookieExpire";
import { cookies } from "next/headers";

export function GET() {
  return tryCatch(async () => {
    const userCookie = cookies().get("user");
    if (userCookie) {
      const token = userCookie.value;
      return jwt.verify(token, process.env.JWT_SECTER, function (error, decode) {
          if (decode) {
            return NextResponse.json(
              {
                response: "login successfull enjoy!",
                login: true,
              },
              { status: 200 }
            );
          }
          return NextResponse.json(
            {
              response: "login failed username or password is wrong",
              login: false,
            },
            { status: 200 }
          );
        }
      );
    }
    return NextResponse.json(
      {
        response: "login failed username or password is wrong",
        login: false,
      },
      { status: 200 }
    );
  });
}

export function POST(req: Request) {
  return tryCatch(async () => {
    const { username, password }: { username: string; password: string } =
      await req.json();
    const result = <{ password: string }[]>await query({
      query: "SELECT `password` FROM `users` WHERE username = ?",
      values: [username],
    });
    if (Array.isArray(result)) {
      if (!result[0]) {
        return NextResponse.json(
          {
            response: "username doesnt exist please create an account",
            login: false,
          },
          { status: 404 }
        );
      }
      const hashedPassword = result[0].password;
      const comparePasswords = await bcrypt.compare(password, hashedPassword);
      if (comparePasswords) {
        const expireDate = GetCookieExpire();
        const token = jwt.sign({ username: username }, process.env.JWT_SECTER, {
          expiresIn: "1d",
        });
        cookies().set({
          name: "user",
          value: token,
          httpOnly: true,
          expires: expireDate,
          path: "/",
        });
        return NextResponse.json(
          {
            response: "login successfull enjoy!",
            login: true,
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          response: "login failed username or password is wrong",
          login: false,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      {
        response: "there is a problem please try again later",
      },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

import { query } from "@/db/sqlDb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { tryCatch } from "@/lib/utils/tryCatch";

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
      const comparePasswords = await bcrypt.compare(
        password,
        result[0].password
      );
      if (comparePasswords) {
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
      { status: 500 }
    );
  });
}

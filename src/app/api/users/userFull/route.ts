import { query } from "@/db/sqlDb";
import checkCookie from "@/lib/utils/checkCookie";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, UserFullSqlType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const userInfo = checkCookie();
    const result = <[] | UserFullSqlType[] | SqlErrorType>await query({
      query: "SELECT `email`, `name`, `bio`, `link`, `image`  FROM `users` WHERE id = ? ",
      values: [userInfo.id],
    });
    if (Array.isArray(result)) {
      if (!result.length) {
        return NextResponse.json(
          {
            response: "there is no more result for this request",
            result: []
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          response: "user is loaded successfully",
          result: [
            {
              id: userInfo.id,
              username: userInfo.username,
              name: result[0].name,
              image: result[0].image,
              email: result[0].email,
              bio: result[0].bio,
              link: result[0].link
            },
          ],
        },
        { status: 200 }
      );
    }
    if ("sqlState" in result && result.sqlState) {
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: DATABASE_ERROR.code }
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

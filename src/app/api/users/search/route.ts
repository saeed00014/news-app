import { query } from "@/db/sqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, UserInfoType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const username = params.get("username");
    const result = <[] | UserInfoType[] | SqlErrorType>await query({
      query: `SELECT id, username, name, image FROM users WHERE username  Like '%${username}%'`,
      values: [username],
    });
    if (Array.isArray(result)) {
      if (!result.length) {
        return NextResponse.json(
          {
            response: "there is no more result for this request",
          },
          { status: 404 }
        );
      }
      return NextResponse.json(
        {
          response: "user is loaded successfully",
          result: result,
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
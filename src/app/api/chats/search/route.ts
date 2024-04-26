import { query } from "@/db/sqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { ChatSqlType, SqlErrorType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import checkCookie from "@/lib/utils/checkCookie";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const userInof = checkCookie();
    const params = req.nextUrl.searchParams;
    const targetUsername = params.get("targetUsername");
    const result = <[] | ChatSqlType[] | SqlErrorType>await query({
      query: `SELECT id, user_id, targetUser_id FROM chats WHERE username Like '%${targetUsername}%' OR targetUsername Like '%${targetUsername}%' AND username = ? OR targetUsername = ?`,
      values: [
        targetUsername,
        targetUsername,
        userInof.username,
        userInof.username,
      ],
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
          response: "chat is loaded successfully",
          result: result,
          user: userInof,
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

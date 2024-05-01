import { query } from "@/db/sqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { ChatSqlType, SqlErrorType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import checkCookie from "@/lib/utils/checkCookie";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const userInfo = checkCookie();
    const params = req.nextUrl.searchParams;
    const targetUsername = params.get("targetUsername");
    const result = <[] | ChatSqlType[] | SqlErrorType>await query({
      query: `SELECT id, user_id, targetUser_id, username, targetUsername FROM chats WHERE (username Like '%${targetUsername}%' OR targetUsername Like '%${targetUsername}%') AND (username = '${userInfo.username}' OR targetUsername = '${userInfo.username}')`,
      values: [
        targetUsername,
        targetUsername,
        userInfo.username,
        userInfo.username,
      ],
    });
    if (Array.isArray(result)) {
      return NextResponse.json(
        {
          response: "chat is loaded successfully",
          result: result,
          user: userInfo,
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

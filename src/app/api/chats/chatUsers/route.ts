import { query } from "@/db/sqlDb";
import checkCookie from "@/lib/utils/checkCookie";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, SqlSuccessType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const userInfo = checkCookie()
    const params = req.nextUrl.searchParams
    const chat_id = params.get("chat_id")
    const result = <{ id: number }[] | SqlSuccessType | SqlErrorType>(
      await query({
        query:
          "SELECT `user_id`, `targetUser_id` FROM `chats` WHERE id = ?",
        values: [chat_id],
      })
    );
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
          response: "chat is loaded successfully",
          result: result,
          user: userInfo
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

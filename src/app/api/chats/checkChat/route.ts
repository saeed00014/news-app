import { query } from "@/db/sqlDb";
import checkCookie from "@/lib/utils/checkCookie";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, SqlSuccessType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const userinfo = checkCookie();
    const params = req.nextUrl.searchParams;
    const targetUser_id = params.get("targetUser_id");
    console.log(targetUser_id)
    const result = <{ id: number }[] | SqlSuccessType | SqlErrorType>(
      await query({
        query:
          "SELECT `id` FROM `chats` WHERE user_id = ? AND targetUser_id = ? OR user_id = ? AND targetUser_id = ?",
        values: [userinfo.id, targetUser_id, targetUser_id, userinfo.id],
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

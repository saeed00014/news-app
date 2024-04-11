import { query } from "@/db/sqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, UserSqlType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, route: any) {
  return tryCatch(async () => {
    const targetUser_id = route.params.id
    const result = <[] | UserSqlType[] | SqlErrorType>await query({
      query: "SELECT `username`, `name`, `image` FROM `users` WHERE id = ? ",
      values: [targetUser_id],
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
          result: [
            {
              id: targetUser_id,
              username: result[0].username,
              name: result[0].name,
              image: result[0].image,
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

import { baseURL } from "@/axios/axios";
import { query } from "@/db/sqlDb";
import checkCookie from "@/lib/utils/checkCookie";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, SqlSuccessType } from "@/types/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function POST(req: NextRequest) {
  return tryCatch(async () => {
    const userInfo = checkCookie();
    const params = req.nextUrl.searchParams;
    const news_id = params.get("news_id");
    const { choosedUsers_id } = await req.json();
    choosedUsers_id.forEach(async (choosedUser: { id: number }) => {
      const chatResult = await baseURL.get(
        `/chats/checkChat?targetUser_id=${choosedUser.id}`,
        {
          headers: { Cookie: cookies().toString() },
        }
      );

      const chat = chatResult.data.result[0];
      
      const result = <SqlSuccessType | SqlErrorType>await query({
        query:
          "INSERT INTO `messages`(`chat_id`, `user_id`, `text`, `news`, `image`, `attached_id`, `attached` ) VALUES (?, ?, ?, ?, ?, ?, ?)",
        values: [chat.id, userInfo.id, null, news_id, null, null, null],
      });
    });
    return NextResponse.json(
      {
        response: "",
      },
      { status: 200 }
    );
  });
}

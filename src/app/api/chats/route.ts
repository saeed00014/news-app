import { NextRequest, NextResponse } from "next/server";
import { tryCatch } from "@/lib/utils/tryCatch";
import { query } from "@/db/sqlDb";
import {
  MessageSqlType,
  MessageClientType,
  SqlSuccessType,
  ChatType,
  SqlErrorType,
} from "@/types/types";
import {
  CLIENT_REQ_ERROR,
  DATABASE_ERROR,
  UNEXPECTED_ERROR,
} from "@/lib/utils/errorCodes";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const user_id = params.get("user_id");
    const result = <[] | MessageSqlType[] | SqlErrorType>await query({
      query:
        "SELECT `id`, `user_id`, `targetUser_id` FROM `chats` WHERE user_id = ? OR targetUser_id = ?",
      values: [user_id, user_id],
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
          sqlMessages: result,
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

export async function POST(req: Request) {
  return tryCatch(async () => {
    const { user_id, targetUser_id } = <ChatType>await req.json();
    const result = <SqlSuccessType | SqlErrorType>await query({
      query: "INSERT INTO `chats`(`user_id`, `targetUser_id`) VALUES (?, ?)",
      values: [user_id, targetUser_id],
    });
    if (result && "insertId" in result && result.insertId) {
      return NextResponse.json(
        {
          response: "your chat is sent successfully",
          insertId: result.insertId,
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

export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const chat_id = params.get("chat_id");
    const result = <SqlSuccessType | SqlErrorType>await query({
      query: "DELETE FROM `chats` WHERE `id` = ?",
      values: [chat_id],
    });
    if (result && "affectedRows" in result && result.affectedRows) {
      return NextResponse.json(
        {
          response: "chat deleted successfully",
          deleted: true,
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

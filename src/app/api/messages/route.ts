import { NextRequest, NextResponse } from "next/server";
import { tryCatch } from "@/lib/utils/tryCatch";
import { query } from "@/db/sqlDb";
import {
  SqlErrorType,
  MessageSqlType,
  MessageClientType,
  SqlSuccessType,
} from "@/types/types";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const chat_id = params.get("chat_id");
    const group = Number(params.get("group"));
    if (!chat_id || !group) {
      return NextResponse.json(
        {
          response: "your request is not valid",
        },
        { status: 500 }
      );
    }
    const result = <[] | MessageSqlType[] | SqlErrorType>await query({
      query:
        "SELECT `id`, `user_id`, `text`, `news`, `image`, `created_at` FROM `messages` WHERE chat_id = ? LIMIT ? OFFSET ?",
      values: [chat_id, 1, group - 1],
    });
    if (Array.isArray(result)) {
      if (!result[0]) {
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
    if (result.sqlState) {
      return NextResponse.json(
        {
          response: "your request is not valid",
        },
        { status: 500 }
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

export async function POST(req: Request) {
  return tryCatch(async () => {
    const { chat_id, user_id, text, news, image } = <MessageClientType>(
      await req.json()
    );
    const result = <SqlSuccessType | SqlErrorType>await query({
      query:
        "INSERT INTO `messages`(`chat_id`, `user_id`, `text`, `news`, `image`) VALUES (?, ?, ?, ?, ?)",
      values: [chat_id, user_id, text, news, image],
    });
    if ("insertId" in result && result.insertId) {
      return NextResponse.json(
        {
          response: "your message is sent successfully",
          insertId: result.insertId,
        },
        { status: 200 }
      );
    }
    if ("sqlState" in result && result.sqlState) {
      return NextResponse.json(
        {
          response: "your message data is not valid ",
        },
        { status: 500 }
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

export function PUT(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const message_id = params.get("message_id");
    const { text } = <{ text: string }>await req.json();
    const result = <SqlSuccessType | SqlErrorType>await query({
      query: "UPDATE `messages` SET `text` = ?, `edited` = true WHERE `id` = ?",
      values: [text, message_id],
    });
    if ("affectedRows" in result && result.affectedRows) {
      return NextResponse.json(
        {
          response: "message edited successfully",
          edited: true,
        },
        { status: 200 }
      );
    }
    if ("sqlState" in result && result.sqlState) {
      return NextResponse.json(
        {
          response: "your new message data is not valid ",
        },
        { status: 500 }
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

export async function DELETE(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const message_id = params.get("message_id");
    const result = <SqlSuccessType | SqlErrorType>await query({
      query: "DELETE FROM `messages` WHERE `id` = ?",
      values: [message_id],
    });
    if ("affectedRows" in result && result.affectedRows) {
      return NextResponse.json(
        {
          response: "message deleted successfully",
          deleted: true,
        },
        { status: 200 }
      );
    }
    if ("sqlState" in result && result.sqlState) {
      return NextResponse.json(
        {
          response: "your new message data is not valid ",
        },
        { status: 500 }
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

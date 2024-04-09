import { query } from "@/db/sqlDb";
import { tryCatch } from "@/lib/utils/tryCatch";
import { SqlErrorType, SqlSuccessType, UserSqlType } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import jwt from "jsonwebtoken";
import GetCookieExpire from "@/hooks/getCookieExpire";
import { cookies } from "next/headers";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const username = params.get("username");
    const result = <[] | UserSqlType[] | SqlErrorType>await query({
      query: `SELECT id, username, image FROM users WHERE username LIKE '%${username}%'`,
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

export function POST(req: NextRequest) {
  return tryCatch(async () => {
    const { username, email, name, birthdate, gender, password } =
      await req.json();
    const salt = await bcrypt.genSalt(14);
    const hashedPassword = await bcrypt.hash(password, salt);
    const result = <SqlSuccessType | SqlErrorType>await query({
      query:
        "INSERT INTO `users`(`username`, `email`, `name`, `birthdate`, `gender`, `password`) VALUES (?, ?, ?, ?, ?, ?)",
      values: [username, email, name, birthdate, gender, hashedPassword],
    });
    if (result && "insertId" in result && result.insertId) {
      const expireDate = GetCookieExpire();
      const token = jwt.sign({ username: username }, process.env.JWT_SECTER, {
        expiresIn: "1d",
      });
      cookies().set({
        name: "user",
        value: token,
        httpOnly: true,
        expires: expireDate,
        path: "/",
      });
      return NextResponse.json(
        { response: "your account is made successfully" },
        { status: 200 }
      );
    }
    if ("sqlState" in result && result.sqlState) {
      if (result.code === "ER_DUP_ENTRY") {
        const repeated = result.sqlMessage.split("key")[1];
        return NextResponse.json(
          { message: `repeated ${repeated}`, repeated: repeated },
          { status: 200 }
        );
      }
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: DATABASE_ERROR.code }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again later" },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

export function PUT(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const user_id = params.get("user_id");
    const { username, email, name, birthdate, gender, image } =
      await req.json();
    const result = <SqlSuccessType>await query({
      query:
        "UPDATE `users` SET `username` = ?, `email` = ?, `name` = ?, `birthdate` = ?, `gender` = ?, `image` = ? WHERE id = ? ",
      values: [username, email, name, birthdate, gender, image, user_id],
    });
    if (result && "affectedRows" in result && result.affectedRows) {
      return NextResponse.json(
        {
          response: "profile edited successfully",
          edited: true,
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

export function DELETE(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const username = params.get("username");
    const result = <SqlSuccessType | SqlErrorType>await query({
      query: "DELETE FROM `users` WHERE username = ?",
      values: [username],
    });
    if (result && "affectedRows" in result && result.affectedRows) {
      return NextResponse.json(
        {
          response: "acount deleted successfully",
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

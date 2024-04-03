import { NextResponse } from "next/server";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "./errorCodes";
import { MongoServerSelectionError } from "mongodb";

export const tryCatch = async (controller: Function) => {
  try {
    return await controller();
  } catch (error: any) {
    if (
      error.code === "ECONNREFUSED" ||
      error instanceof MongoServerSelectionError
    ) {
      return NextResponse.json(
        { response: "there is a network problem please try again later" },
        { status: 500 }
      );
    }
    if ("sqlState" in error && error.sqlState) {
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: DATABASE_ERROR.code }
      );
    }
    if ("errorResponse" in error && error.errorResponse.code) {
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: DATABASE_ERROR.code }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again later" },
      { status: UNEXPECTED_ERROR.code }
    );
  }
};

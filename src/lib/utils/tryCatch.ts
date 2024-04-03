import { NextResponse } from "next/server";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "./errorCodes";

export const tryCatch = async (controller: Function) => {
  try {
    return await controller();
  } catch (error: any) {
    if (error.code === "ECONNREFUSED") {
      return NextResponse.json(
        { response: "there is a network problem please try again later" },
        { status: 500 }
      );
    }
    if ("sqlState" in error && error.sqlState) {
      return NextResponse.json(
        {
          response: "your request is not valid",
        },
        { status: DATABASE_ERROR.code }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again later" },
      { status: UNEXPECTED_ERROR.code }
    );
  }
};

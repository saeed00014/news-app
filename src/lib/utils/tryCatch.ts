import { NextResponse } from "next/server";
import { UNEXPECTED_ERROR } from "./errorCodes";

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
    return NextResponse.json(
      { response: "there is a problem please try again later" },
      { status: UNEXPECTED_ERROR.code }
    );
  }
};

import { tryCatch } from "@/lib/utils/tryCatch";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET() {
  return tryCatch(() => {
    cookies().delete("user");
    return NextResponse.json({ reponse: "" });
  });
}

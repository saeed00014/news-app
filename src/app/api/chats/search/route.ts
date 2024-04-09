import { query } from "@/db/sqlDb";
import { tryCatch } from "@/lib/utils/tryCatch";
import { NextRequest } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const params = req.nextUrl.searchParams;
    const username = params.get("username");
    const targetUsername = params.get("targetUsername");
    const result = await query({
      query: "",
      values: []
    })
    console.log(username, targetUsername)
  })
}
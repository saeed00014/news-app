import dbCollection from "@/db/noSqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { MongoNewsType } from "@/types/types";
import { Collection } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const collection: Collection = await dbCollection();
    const params = req.nextUrl.searchParams;
    const category = params.get("category");
    const limit = Number(params.get("limit"));
    const result = <[] | MongoNewsType[]>await collection
      .find({
        category: category,
      })
      .limit(limit)
      .toArray();
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
          response: "news is loaded successfully",
          result: result,
        },
        { status: 200 }
      );
    }
    if ("errorResponse" in result && result.errorResponse.code) {
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: DATABASE_ERROR.code }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again laterr" },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

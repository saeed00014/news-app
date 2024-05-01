import dbCollection from "@/db/noSqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { MongoAddType, MongoErrorType } from "@/types/types";
import { Collection, Db } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const db: Db = await dbCollection();
    const collection = db.collection("adds");
    const params = req.nextUrl.searchParams;
    const place = params.get("place");
    const type = params.get("type");
    const limit = Number(params.get("limit"));
    const result = <[] | MongoAddType[] | MongoErrorType>(
      await collection.find({ place: place, type: type }).limit(limit).toArray()
    );
    if (Array.isArray(result)) {
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

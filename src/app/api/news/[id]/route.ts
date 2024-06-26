import dbCollection from "@/db/noSqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { MongoErrorType, MongoNewsType } from "@/types/types";
import { Collection, Db, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, route: any) {
  return tryCatch(async () => {
    const db: Db = await dbCollection();
    const collection = db.collection("news");
    const id = route.params.id;
    const result = <[] | MongoNewsType[] | MongoErrorType>(
      await collection.find({ _id: new ObjectId(id) }).toArray()
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

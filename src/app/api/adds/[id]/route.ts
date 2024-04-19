import dbCollection from "@/db/noSqlDb";
import { DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { MongoAddType, MongoErrorType } from "@/types/types";
import { Db, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, route: any) {
  return tryCatch(async () => {
    const db: Db = await dbCollection();
    const collection = db.collection("adds");
    const id = route.params.id;
    const result = <[] | MongoAddType[] | MongoErrorType>(
      await collection.find({ _id: new ObjectId(id) }).toArray()
    );
    if (Array.isArray(result)) {
      if (!result.length) {
        return NextResponse.json(
          {
            response: "there is no more result for this request",
            result: []
          },
          { status: 200 }
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

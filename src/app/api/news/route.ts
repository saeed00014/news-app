import dbCollection from "@/db/noSqlDb";
import { CLIENT_REQ_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { Collection, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {
  MongoDeleteSuccessType,
  MongoNewsType,
  MongoPostSuccessType,
} from "@/types/types";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const collection: Collection = await dbCollection();
    const params = req.nextUrl.searchParams;
    const group = params.get("group");
    const result = <[] | MongoNewsType[]>await collection.find().toArray();
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
          sqlMessages: result,
        },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again laterr" },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

export function POST(req: NextRequest) {
  return tryCatch(async () => {
    const collection: Collection = await dbCollection();
    const { title, image, description, content } = <MongoNewsType>(
      await req.json()
    );
    const result = <MongoPostSuccessType>await collection.insertOne({
      title,
      image,
      description,
      content,
    });
    if ("insertedId" in result && result.insertedId) {
      return NextResponse.json(
        { response: "news posted successfully", insertId: result.insertedId },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again laterr" },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

export function PUT(req: NextRequest) {
  return tryCatch(async () => {});
}

export function DELETE(req: NextRequest) {
  return tryCatch(async () => {
    const collection: Collection = await dbCollection();
    const params = req.nextUrl.searchParams;
    const news_id = params.get("news_id");
    if (!news_id) {
      return NextResponse.json(
        { response: "your request is not valid" },
        { status: CLIENT_REQ_ERROR.code }
      );
    }
    const result = <MongoDeleteSuccessType>(
      await collection.deleteOne({ _id: new ObjectId(news_id) })
    );
    if ("deletedCount" in result && result.deletedCount) {
      return NextResponse.json(
        { response: "news deleted successfully" },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { response: "there is a problem please try again laterr" },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

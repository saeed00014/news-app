import dbCollection from "@/db/noSqlDb";
import {
  CLIENT_REQ_ERROR,
  DATABASE_ERROR,
  UNEXPECTED_ERROR,
} from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { Collection, Db, ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import {
  MongoDeleteSuccessType,
  MongoErrorType,
  MongoNewsType,
  MongoPostSuccessType,
} from "@/types/types";
import { categories } from "@/assets/data";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const db: Db = await dbCollection();
    const collection = db.collection("news");
    const params = req.nextUrl.searchParams;
    const group = params.get("group");
    const result: MongoNewsType[] = [];
    for(let i = 0; i < 6; i++) {
      const response = <[] | MongoNewsType[] | MongoErrorType>(
        await collection.find({ category: categories[i] }).limit(1).toArray()
      );
      Array.isArray(response) && response[0] && result.push(response[0]);
      if(i === 5 ){
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
      if ("errorResponse" in response && response.errorResponse.code) {
        return NextResponse.json(
          { response: "your request is not valid" },
          { status: DATABASE_ERROR.code }
        );
      }
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
    const result = <MongoPostSuccessType | MongoErrorType>await collection.insertOne({
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
    const result = <MongoDeleteSuccessType | MongoErrorType>(
      await collection.deleteOne({ _id: new ObjectId(news_id) })
    );
    if ("deletedCount" in result && result.deletedCount) {
      return NextResponse.json(
        { response: "news deleted successfully" },
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

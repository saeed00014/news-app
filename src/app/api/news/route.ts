import dbCollection from "@/db/noSqlDb";
import { UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";
import { tryCatch } from "@/lib/utils/tryCatch";
import { Collection } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { MongoNewsType } from "@/types/types";

export function GET(req: NextRequest) {
  return tryCatch(async () => {
    const collection: Collection = await dbCollection();
    const params = req.nextUrl.searchParams;
    const group = params.get("group");
    const result = <[] | MongoNewsType[]>await collection.find().toArray();
    console.log(result);
    // if (Array.isArray(result)) {
    //   if (!result.length) {
    //     return NextResponse.json(
    //       {
    //         response: "there is no more result for this request",
    //       },
    //       { status: 404 }
    //     );
    //   }
    //   return NextResponse.json(
    //     {
    //       response: "chat is loaded successfully",
    //       sqlMessages: result,
    //     },
    //     { status: 200 }
    //   );
    // }
    return NextResponse.json(
      {
        response: "there is a problem please try again laterr",
      },
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
    const result = await collection.insertOne({
      title,
      image,
      description,
      content,
    });
    console.log(result);
    return NextResponse.json(
      {
        response: "there is a problem please try again laterr",
      },
      { status: UNEXPECTED_ERROR.code }
    );
  });
}

export function PUT(req: NextRequest) {
  return tryCatch(async () => {});
}

export function DELETE(req: NextRequest) {
  return tryCatch(async () => {});
}

import dbCollection from "@/db/noSqlDb";
import clientPromise from "@/db/noSqlDb";
import { tryCatch } from "@/lib/utils/tryCatch";
import { NextRequest, NextResponse } from "next/server";

export function GET() {
  return tryCatch(async () => {
    const collection = await dbCollection()
    console.log(await collection.findOne())
    return new NextResponse("yes")
  })
}

export function POST(req: NextRequest) {
  return tryCatch(async () => {})
}

export function PUT(req: NextRequest) {
  return tryCatch(async () => {})
}

export function DELETE(req: NextRequest) {
  return tryCatch(async () => {})
}
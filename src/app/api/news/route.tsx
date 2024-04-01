import clientPromise from "@/db/noSqlDb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise
  const db = client.db("donyanews")
  console.log(await db.collection("news").findOne())
  return new NextResponse("yes")
}
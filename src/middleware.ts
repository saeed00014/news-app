import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if(false) {
    //check auth here
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/messenger/:path'
}
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    //take from cookies
    const userCookieInfo = { username: "testuser", password: "aaaa1111" }
    const userResponse = await fetch(`http://localhost:3000/api/auth`, {
      method: "POST",
      body: JSON.stringify(userCookieInfo),
    });
    if(userResponse.status !== 200 ) {
     throw new Error(`status: ${userResponse.status}`)
    }
    const data = await userResponse.json();

    if (data.login) {
      return NextResponse.next();
    }

    return NextResponse.rewrite(new URL("/login", request.url));
  } catch(error) {
    //log error to loging system
    return NextResponse.rewrite(new URL("/login", request.url));
  }
}

export const config = {
  matcher: "/messenger/:path",
};

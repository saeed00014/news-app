import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  try {
    const userResponse = await fetch(`http://localhost:3000/api/auth`, {
      method: "GET",
      headers: { Cookie: cookies().toString() },
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
  matcher: ["/messenger/:path", "/profile/:path"],
};

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest, res: any) {
  try {
    const userResponse = await fetch(`${process.env.AXIOS_URL}/auth`, {
      method: "GET",
      headers: { Cookie: cookies().toString() },
    });
    if (userResponse.status !== 200) {
      throw new Error(`status: ${userResponse.status}`);
    }

    const data = await userResponse.json();
    if (data.login) {
      return NextResponse.next();
    }

    return NextResponse.rewrite(new URL("/login", process.env.AXIOS_URL));
  } catch (error) {
    //log error to loging system
    return NextResponse.rewrite(new URL("/login", process.env.AXIOS_URL));
  }
}

export const config = {
  matcher: [
    "/messenger/:path*",
    "/profile/:path*",
    "/api/chats/:path*",
    "/api/messages/:path*",
    "/api/users/:path*",
  ],
};

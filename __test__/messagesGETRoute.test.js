/**
 * @jest-environment node
 */
import { GET } from "@/app/api/messages/route";
import { NextRequest } from "next/server";
import { query } from "@/db/sqlDb";
import { CLIENT_REQ_ERROR, DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";

const queryMock = jest.fn(() => {});
jest.mock("../src/db/sqlDb", () => ({
  query: () => queryMock(),
}));

const req = {
  nextUrl: {
    searchParams: {
      get: (p) => {
        return p === "group" ? 1 : 1;
      },
    },
  },
};

describe("the get method for messages works fine", () => {
  test("chat_id or group is not valid", async () => {
    const reqGruopNotValid = {
      nextUrl: {
        searchParams: {
          get: (p) => { 
            return p === "group" ? 0 : 1;
          },
        },
      },
    };
    const reqChat_idNotValid = {
      nextUrl: {
        searchParams: {
          get: (p) => {
            return p === "group" ? 0 : 1;
          },
        },
      },
    };
    expect((await GET(reqGruopNotValid)).status).toBe(CLIENT_REQ_ERROR.code);
    expect((await GET(reqChat_idNotValid)).status).toBe(CLIENT_REQ_ERROR.code);
  });
  test("result is empty", async () => {
    queryMock.mockReturnValue([]);
    expect((await GET(req)).status).toBe(404);
  });
  test("result is a valid message", async () => {
    queryMock.mockReturnValue([
      {
        id: 1,
        user_id: 1,
        text: "null",
        news: null,
        image: null,
        created_at: "date",
      },
    ]);
    expect((await GET(req)).status).toBe(200);
  });
  test("result is a sql error", async () => {
    queryMock.mockReturnValue({
      code: "string",
      errno: 1,
      sql: "string",
      sqlState: "string",
      sqlMessage: "string",
    });
    expect((await GET(req)).status).toBe(DATABASE_ERROR.code);
  });
  test("an unexpected error occured", async () => {
    queryMock.mockReturnValue(new Error)
    expect((await GET(req)).status).toBe(UNEXPECTED_ERROR.code);
  });
});

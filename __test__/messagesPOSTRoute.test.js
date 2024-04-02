/**
 * @jest-environment node
 */
import { POST } from "@/app/api/messages/route";
import { NextRequest } from "next/server";
import { query } from "@/db/sqlDb";
import {
  CLIENT_REQ_ERROR,
  DATABASE_ERROR,
  UNEXPECTED_ERROR,
} from "@/lib/utils/errorCodes";

const queryMock = jest.fn(() => {});
jest.mock("../src/db/sqlDb", () => ({
  query: () => queryMock(),
}));

const req = {
  json: () => {
    return { chat_id: 1, user_id: 1, text: "text", news: null, image: null };
  },
};

describe("test messages post route", () => {
  test("post was successful", async () => {
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 1,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await POST(req)).status).toBe(200);
  });
  test("result is a sql error", async () => {
    queryMock.mockReturnValue({
      code: "string",
      errno: 1,
      sql: "string",
      sqlState: "string",
      sqlMessage: "string",
    });
    expect((await POST(req)).status).toBe(DATABASE_ERROR.code);
  });
  test("result is an unexpected error", async () => {
    queryMock.mockReturnValue(undefined);
    expect((await POST(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue(new Error());
    expect((await POST(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 0,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await POST(req)).status).toBe(UNEXPECTED_ERROR.code);
  });
});

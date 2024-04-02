/**
 * @jest-environment node
 */
import { PUT } from "@/app/api/messages/route";
import {query} from "@/db/sqlDb"
import { CLIENT_REQ_ERROR, DATABASE_ERROR, UNEXPECTED_ERROR } from "@/lib/utils/errorCodes";

const req = {
  json: () => {
    return { text: "text" };
  },
  nextUrl: {
    searchParams: {
      get: () => {
        return 1;
      },
    },
  },
};

const queryMock = jest.fn(() => {})
jest.mock("../src/db/sqlDb", () => ({
  query: () => queryMock()
}))

describe("check if the messages put method works", () => {
  test("put was successful", async () => {
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 1,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await PUT(req)).status).toBe(200);
  });
  test("result is a sql error", async () => {
    queryMock.mockReturnValue({
      code: "string",
      errno: 1,
      sql: "string",
      sqlState: "string",
      sqlMessage: "string",
    });
    expect((await PUT(req)).status).toBe(DATABASE_ERROR.code);
  });
  test("result is an unexpected error", async () => {
    queryMock.mockReturnValue(undefined);
    expect((await PUT(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue(new Error());
    expect((await PUT(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 0,
      insertId: 1,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await PUT(req)).status).toBe(UNEXPECTED_ERROR.code);
  });
})

/**
 * @jest-environment node
 */
import { DELETE } from "@/app/api/messages/route";
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
  nextUrl: {
    searchParams: {
      get: () => {
        return 1;
      },
    },
  },
};

describe("messages delete method works", () => {
  test("delete was successful", async () => {
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 1,
      insertId: 1,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await DELETE(req)).status).toBe(200);
  });
  test("result is a sql error", async () => {
    queryMock.mockReturnValue(Error);
    expect((await DELETE(req)).status).toBe(DATABASE_ERROR.code);
  });
  test("result is an unexpected error", async () => {
    queryMock.mockReturnValue(undefined);
    expect((await DELETE(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue(new Error());
    expect((await DELETE(req)).status).toBe(UNEXPECTED_ERROR.code);
    queryMock.mockReturnValue({
      fieldCount: 0,
      affectedRows: 0,
      insertId: 1,
      info: "string",
      serverStatus: 1,
      warningStatus: 0,
      changedRows: 1,
    });
    expect((await DELETE(req)).status).toBe(UNEXPECTED_ERROR.code);
  });
})
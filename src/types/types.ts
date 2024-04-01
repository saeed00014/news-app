export type NewsInfo = {
  image: string;
  category: string;
  title: string;
  descriptoin: string;
};

export type UserInfoType = {
  id: number;
  firstname: string;
  username: string;
  image: string | null;
};

export type SqlErrorType = {
  code: string,
  errno: number,
  sql: string,
  sqlState: string,
  sqlMessage: string
}
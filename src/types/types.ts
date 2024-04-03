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
  code: string;
  errno: number;
  sql: string;
  sqlState: string;
  sqlMessage: string;
};

export type SqlSuccessType = {
  fieldCount: number;
  affectedRows: number;
  insertId: number;
  info: string;
  serverStatus: number;
  warningStatus: number;
  changedRows: number;
};

export type MessageSqlType = {
  id: number;
  user_id: number;
  text: string | null;
  news: string | null;
  image: string | null;
  created_at: string;
};

export type MessageClientType = {
  chat_id: number;
  user_id: number;
  text: string | null;
  news: string | null;
  image: string | null;
};

export type UserSqlType = {
  id: number,
  username: string,
  image: string
}

export type UserClientType = {

}
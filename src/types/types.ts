import { ObjectId } from "mongodb";

export type NewsInfo = {
  image: string;
  category: string;
  title: string;
  descriptoin: string;
};

export type UserInfoType = {
  id: number;
  name: string;
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
  attached_id: number | null;
  attached: string | null;
  created_at?: string;
};

export type MessageClientType = {
  chat_id: number;
  user_id: number;
  text: string | null;
  news: string | null;
  image: string | null;
  attached_id: number | null;
  attached: string | null;
};

export type MessageSendType = {
  text: string | null;
  news: string | null;
  image: string | null;
  attached_id: number | null;
  attached: string | null;
};

export type UserSqlType = {
  id: number;
  name: string;
  username: string;
  image: string;
};

export type NewUserType = {
  username: string;
  email: string;
  name: string;
  gender: string;
  birthdate: string;
  password: string;
};

export type UserClientType = {};

export type MongoNewsType = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string[];
};

export type MongoPostSuccessType = {
  acknowledged: boolean;
  insertedId: ObjectId;
};

export type MongoDeleteSuccessType = {
  acknowledged: boolean;
  deletedCount: number;
};

export type ChatSqlType = {
  user_id: number;
  targetUser_id: number;
  username: string;
  targetUsername: string;
};

export type ChatActionMessage = {
  action: string;
  message: MessageSqlType;
};

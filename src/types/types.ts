import { ObjectId } from "mongodb";

export type NewsInfo = {
  _id: number;
  image: string;
  category: string;
  title: string;
  description: string;
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

export type UserFullSqlType = {
  id: number;
  email: string;
  name: string;
  username: string;
  image: string;
  bio: string;
  link: string;
};

export type NewUserType = {
  username: string;
  email: string;
  name: string;
  gender: string;
  birthdate: string;
  password: string;
};

export type UserEditType = {
  username: string
  email: string
  name: string
  link: string | null
  bio: string | null
  image: string | null
};

export type MongoNewsType = {
  _id: string;
  title: string;
  image: string;
  description: string;
  category: string;
  add: string;
  readMore: string;
  content: string;
};

export type MongoErrorType = {
  errorResponse: {
    code: number;
  };
};

export type MongoAddType = {
  id: string;
  link: string;
  image: string;
  text: string;
  place: string;
  type: string;
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

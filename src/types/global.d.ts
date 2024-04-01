export declare global {
  var mongodbClient: {
    conn: Promise | null,
  };
  namespace NodeJS {
    interface ProcessEnv {
      MYSQL_HOST: string
      MYSQL_USER: string
      MYSQL_DATABASE_NAME: string
      MYSQL_PASS: string
      MONGODB_URI: string
    }
  }
}
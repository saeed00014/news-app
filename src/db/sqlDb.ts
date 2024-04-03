import mysql from "mysql2/promise";

type Props = {
  query: string;
  values: (string | number | null)[];
};

export async function query({ query, values }: Props) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE_NAME,
  });

  try {
    const [result] = await dbconnection.execute(query, values);
    dbconnection.end();
    return result;
  } catch (error) {
    throw error;
  }
}

import { MongoClient, ServerApiVersion } from "mongodb";

async function dbCollection() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
    }

    const uri = process.env.MONGODB_URI;
    const options = {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    };

    let client;
    var collection: any;
    global.mongodbClient = {
      conn: null,
    };

    if (global.mongodbClient.conn) {
      collection = global.mongodbClient.conn;
      return collection;
    } else {
      client = new MongoClient(uri, options);
      const clientConnection = await client.connect();
      const db = clientConnection.db("donyanews");
      global.mongodbClient.conn = db;
      return db;
    }
  } catch (error) {
    return error;
  }
}

export default dbCollection;

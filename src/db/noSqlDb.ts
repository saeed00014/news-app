import { MongoClient, ServerApiVersion } from "mongodb";

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
var clientPromise: Promise<MongoClient>;
global.mongodbClient = {
  conn: null
}

if(global.mongodbClient.conn) {
  clientPromise = global.mongodbClient.conn
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
  global.mongodbClient.conn = clientPromise
}

export default clientPromise;

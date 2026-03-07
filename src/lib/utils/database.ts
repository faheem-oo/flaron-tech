import { MongoClient, Db } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClient?: MongoClient;
};

let client: MongoClient | undefined;

export async function getDatabase(): Promise<Db> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (!client) {
    client = globalForMongo._mongoClient ?? new MongoClient(uri);

    if (process.env.NODE_ENV !== "production") {
      globalForMongo._mongoClient = client;
    }
  }

  await client.connect();
  return client.db(process.env.MONGODB_DB || "flaron_tech");
}

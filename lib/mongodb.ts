import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    // ✅ FIXED: Declare 'client' BEFORE using it
    const client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // ✅ Same fix in production
  const client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

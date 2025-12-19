import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb"; // Your MongoDB connection

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise), // ← STORES IN MONGODB
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],
});

export { handler as GET, handler as POST };

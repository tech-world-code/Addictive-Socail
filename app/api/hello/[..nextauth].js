import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client"
import { Prisma } from "../../../prisma/client";

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
  })
import { prisma } from "@/utils/db";
import { compare } from "bcrypt";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

type MyCredentials = {
  email: string;
  password: string;
};

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: MyCredentials | undefined, req) {
        // Check if credentials are present
        if (!credentials) throw new Error("Credentials are required");

        // Check user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) throw new Error("This email is not registered");

        // Check password
        const checkPassword =
          user.password && (await compare(credentials.password, user.password));
        if (!checkPassword) throw new Error("Email or password doesn't match");

        return {
          ...user,
        };
      },
    }),
  ],

  jwt: {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    secret: process.env.NEXTAUTH_SECRET,
    // other options...
  },
};

export default NextAuth(authOptions);

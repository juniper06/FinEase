import NextAuth, { DefaultSession, User as DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth/session";

declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    token: string;
    role: string;
  }
  interface Session {
    user: User;
  }
  interface JWT {
    user: User;
  }
}
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { ValidateCredentials } from "@/lib/ValidateCredentials";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId:process.env.AUTH_GOOGLE_ID,clientSecret:process.env.AUTH_GOOGLE_SECRET
    }),
    Credentials({
    credentials:{
      email:{}, password:{}
    },authorize: async (credentials) =>{

      const user = await ValidateCredentials(credentials.email as string,credentials.password as string)

      return user
    }
  })],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub; // Garante que o id do banco vai para session.user.id
      }
      return session;
    },
  },
});
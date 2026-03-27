import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUserByEmail } from "@/lib/sheets";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user }) {
      return Boolean(user.email);
    },
    async jwt({ token }) {
      if (token.email) {
        try {
          const sheetUser = await getUserByEmail(token.email);
          token.role = sheetUser?.role ?? "viewer";
          token.status = sheetUser?.status ?? "active";
        } catch {
          token.role = "viewer";
          token.status = "active";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as string) ?? "viewer";
        session.user.status = (token.status as string) ?? "active";
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

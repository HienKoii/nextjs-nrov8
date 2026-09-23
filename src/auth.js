import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },

        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const account = await prisma.account.findUnique({
          where: {
            username: String(credentials.username),
          },

          select: {
            id: true,
            username: true,
            password: true,
            is_admin: true,
            active: true,
            vnd: true,
            danap: true,
            player: {
              select: {
                id: true,
                name: true,
                head: true,
                gender: true,
              },
            },
          },
        });

        if (!account) {
          return null;
        }

        // Kiểm tra password
        if (String(credentials.password) !== account.password) {
          return null;
        }

        return {
          id: String(account.id),
          username: account.username,
          is_admin: account.is_admin,
          vnd: account.vnd,
          danap: account.danap,
          active: account.active,
          player: account.player
            ? {
                id: account.player.id,
                name: account.player.name,
                head: account.player.head,
                gender: account.player.gender,
              }
            : null,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.is_admin = user.is_admin;
        token.vnd = user.vnd;
        token.danap = user.danap;
        token.active = user.active;
        token.player = user.player;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.is_admin = token.is_admin;
        session.user.player = token.player;
        session.user.vnd = token.vnd;
        session.user.danap = token.danap;
        session.user.active = token.active;
      }

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
});

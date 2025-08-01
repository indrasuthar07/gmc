import dotenv from "dotenv";
dotenv.config();

import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import connectDb from '@/db/connectDb';
import User from '@/models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google" || account.provider === "github") {
        try {
          await connectDb();
          
          // Check if user already exists
          const currentUser = await User.findOne({ email: user.email });
          
          if (!currentUser) {
            // Create a new user
            const newUser = await User.create({
              email: user.email,
              username: user.email.split("@")[0],
              name: user.name,
              profilepic: user.image,
            });
          }
          return true;
        } catch (error) {
          console.error('Database connection error:', error);
          // For testing, allow sign in even if database fails
          return true;
        }
      }
      return true;
    },

    async session({ session, user, token }) {
      try {
        await connectDb();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.name = dbUser.username;
          session.user.id = dbUser._id.toString();
        } else {
          // Fallback if user not in database
          session.user.name = session.user.email.split("@")[0];
        }
      } catch (error) {
        console.error('Session error:', error);
        // Fallback if database fails
        session.user.name = session.user.email.split("@")[0];
      }
      return session;
    },

    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
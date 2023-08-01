import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: b4a6a6b7727d86620a02,
    //   clientSecret: f6634f1003af0334582554e2c8d78350105f5f93,
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
 
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectDB();

        // check if use already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, crate a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
      }
    },
  
});

export { handler as GET, handler as POST };
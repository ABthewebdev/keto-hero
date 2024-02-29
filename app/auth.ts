import NextAuth from "next-auth/next";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google"

export const nextProviders {
    handlers: {GET, POST, PUT, DELETE},
    auth,
    signIn,signOut} = NextAuth({providers: [Github, Google]})
}
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import NextAuthConfig from "next-auth"

export const config = {
    // Remove the 'theme' property
    providers: [Google, Github],
    callbacks: {
        authorized({ request, auth }: any) {
            const { pathname } = request.nextUrl
            if (pathname === "/middleware-example") return !!auth
            return true
        },
        jwt({ token, trigger, session }: any) {
            if (trigger === "update") token.name = session.user.name
            return token
        },
    },
} satisfies typeof NextAuthConfig
export const { handlers, auth, signIn, signOut } = NextAuth({
    ...config,
    providers: [
        Google({
            clientId: "YOUR_GOOGLE_CLIENT_ID",
            clientSecret: "YOUR_GOOGLE_CLIENT_SECRET",
        }),
        Github({
            clientId: "YOUR_GITHUB_CLIENT_ID",
            clientSecret: "YOUR_GITHUB_CLIENT_SECRET",
        }),
    ],
});

import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import apiService from "@/lib/api.service";
import ApiRoutes from "../../enums/api.routes.enums";
import { AxiosResponse } from "axios";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_CLIENT as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter username" },
                password: { label: "Password", type: "password", placeholder: "Enter password" }
            },
            async authorize(credentials, req) {
                const response: AxiosResponse = await apiService.post(ApiRoutes.Login, { email: credentials?.username, password: credentials?.password });
                if (response.data) {
                    return response.data
                } else {
                    return null
                }
            },
        }),
    ],
    pages: {
        signIn: '/auth/signIn',
        // signOut: '/auth/signout',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
    callbacks: {
        async session({ session, token }) {
            console.log('session:::::3', session);
            console.log('token:::::3', token);
            return session;
        },
        async signIn({ user, account, profile }) {
            try {
                if (account?.provider == 'google') {
                    const socialUser = {
                        providerAccountId: user.id,
                        socialProvider: account.provider,
                        name: user.name,
                        email: user.email,
                        image: user.image,
                        // isMailVerified: profile.email_verified ?? false
                    }
                    await apiService.post(ApiRoutes.SocialLogin, socialUser);
                }
                return true;
            } catch (err) {
                console.log('Login error: ', err);
                return false
            }
        },
        // Add other callbacks as needed
    },
}
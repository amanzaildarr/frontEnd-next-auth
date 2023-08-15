import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import apiService from "../../api.service";
import ApiRoutes from "../../enums/api.routes.enums";
import { AxiosResponse } from "axios";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
          }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Enter username" },
                password: { label: "Password", type: "password", placeholder: "Enter password" }
            },
            async authorize(credentials, req) {
                const response: AxiosResponse = await apiService.post(ApiRoutes.Login, { email:credentials?.username,password:credentials?.password });
                if (response.data) {
                    return response.data
                } else {
                    return null
                }
            },
        })
    ]
}
import NextAuth from "next-auth"

// import { User } from 'next-auth';

interface User {
    _id: string
    name: string
    email: string // Add the accessToken property
}

declare module 'next-auth' {
    interface Session {
        user: User;
        accessToken: string
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user: User
        accessToken: string
    }
}
declare module "next-auth/jwt" {

    interface User {
        _id: string
        name: string
        email: string
        accessToken: string
      }
  }
import { PrismaAdapter } from '@auth/prisma-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'

import { env } from './env'
import { prisma } from './lib/prisma'

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
    verifyRequest: '/login',
    newUser: '/home',
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Nodemailer({
      server: env?.EMAIL_SERVER,
      from: env?.EMAIL_FROM,
    }),
    GitHub,
    GoogleProvider({
      clientId: env?.AUTH_GOOGLE_ID,
      clientSecret: env?.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
})

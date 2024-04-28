import 'dotenv/config'

import { z } from 'zod'

const envSchema = z.object({
  EMAIL_SERVER: z.string(),
  EMAIL_FROM: z.string(),
  DATABASE_URL: z.string(),
  AUTH_GITHUB_ID: z.string(),
  AUTH_GITHUB_SECRET: z.string(),
  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),
})

const _env = envSchema.safeParse(process.env)

export const env = _env.data

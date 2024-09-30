import z from 'zod'

const envShchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envShchema.parse(process.env)

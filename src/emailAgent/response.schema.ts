import {z} from 'zod'

export const EmailSchema = z.object({
  subject: z.string(),
  body: z.string(),
});

export type EmailResponse = z.infer<typeof EmailSchema>;
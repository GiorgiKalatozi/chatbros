import { z } from 'zod';

export const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  MONGODB_URI: z.coerce.string(),
  NODE_ENV: z.coerce.string(),
});
export type Env = z.infer<typeof envSchema>;

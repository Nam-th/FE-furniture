import { z } from 'zod';

const envVariables = z.object({
  NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
  NEXT_PUBLIC_API_ENDPOINT: z.string(),
});

const configSchema = envVariables.safeParse({
  NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,
});

if (!configSchema.success) {
  console.error(configSchema.error.issues);
  throw new Error('Error in .env file');
}

const envConfig = configSchema.data;
export default envConfig;

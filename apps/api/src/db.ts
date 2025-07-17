import { drizzle } from "drizzle-orm/libsql";

// TODO: https://elysiajs.com/integrations/drizzle.html
export const db = drizzle(process.env.DB_FILE_NAME!);

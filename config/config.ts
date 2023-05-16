import dotenv from "dotenv";
dotenv.config();

export const config: {
  dbUser?: string;
  dbPassword?: string;
  dbHost?: string;
  dbPort?: string;
  dbName?: string;
  jwtSecret?: string | null;
} = {
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  jwtSecret: process.env.JWT_SECRET,
};

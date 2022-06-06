import { registerAs } from "@nestjs/config";

export default registerAs('database', () => ({
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASSWORD
}));
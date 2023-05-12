import "dotenv/config";
import "reflect-metadata";
import { DataSource } from "typeorm";

const port = (process.env.DB_PORT as number | undefined) ?? 5432;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST ?? "localhost",
  port: port,
  username: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASS ?? "postgres",
  database: process.env.DB_NAME ?? "api_rest_typescript",
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

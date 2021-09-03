import {config} from "dotenv";

config();

export const envs = {
  username: String(process.env.DB_USER),
  password: String(process.env.DB_PASS),
  database: String(process.env.DB_NAME),
  port: parseInt(process.env.DB_PORT || '5439'),
  host: String(process.env.DB_HOST)
};

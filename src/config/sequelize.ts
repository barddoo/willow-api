import {Sequelize} from 'sequelize-typescript';
import {envs} from "./config";

const sequelize = new Sequelize(
  {
    database: envs.database,
    username: envs.username,
    password: envs.password,
    host: process.env.DB_HOST,
    port: envs.port,
    dialect: 'postgres',
    models: [__dirname + '/../models']
  },
);

export function setupDatabase() {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
}
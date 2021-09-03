import express from 'express';
import dotenv from 'dotenv';

import usersRoutes from './src/routes/users';
import topicsRoutes from './src/routes/topics';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());
app.use('/api', topicsRoutes);
app.use('/api', usersRoutes);
app.use(errorHandler);

module.exports = app;

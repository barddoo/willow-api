import usersRoutes from './routes/users';
import topicsRoutes from './routes/topics';
import errorHandler from './middleware/errorHandler';

import * as express from 'express';
import {setupDatabase} from "./config/sequelize";

const dotenv = require('dotenv');
dotenv.config();
setupDatabase();

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);



app.use(express.json());
app.use('/topics', topicsRoutes);
app.use('/users', usersRoutes);
// app.use(errorHandler);

export default app;

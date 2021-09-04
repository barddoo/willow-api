import usersRoutes from './routes/user.route';
import topicsRoutes from './routes/topic.route';
import associationRoutes from './routes/userTopic.route';

import * as express from 'express';
import {setupDatabase} from "./config/sequelize";
import errorHandler from "./middleware/errorHandler";

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
app.use('/associate', associationRoutes);
app.use('/users', usersRoutes);
app.use(errorHandler);

export default app;

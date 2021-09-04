/* eslint-disable no-console */

import * as dotenv from 'dotenv';
import app from './app';
import {Application} from "express";

dotenv.config();

process.on('uncaughtException', (uncaughtExc) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

const setUpExpress = () => {
  const port = process.env.APP_PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });

  app.on('error', (appErr: Application) => {
    console.error('app error', appErr.stack);
  });

  process.on('unhandledRejection', (err: {} | null | undefined) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(JSON.stringify(err));
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('SIGTERM', () => {
    console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      console.log('💥 Process terminated!');
    });
  });
};

setUpExpress();

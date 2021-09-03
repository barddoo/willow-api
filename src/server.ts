/* eslint-disable no-console */

import * as dotenv from 'dotenv';
import app from './app';
import {Application} from "express";

dotenv.config();

// Handle uncaught exceptions
process.on('uncaughtException', (uncaughtExc) => {
  // Won't execute
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

// Setup an express server and define port to listen all incoming requests for this application
const setUpExpress = () => {
  const port = process.env.APP_PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });

  // In case of an error
  app.on('error', (appErr: Application) => {
    console.error('app error', appErr.stack);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err: {} | null | undefined) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(JSON.stringify(err));
    // Close server & exit process
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

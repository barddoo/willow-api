/* eslint-disable no-console */

import dotenv from 'dotenv';
import app from './app';

require('@babel/register');
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
  dotenv.config({ path: '.env' });

  const port = process.env.APP_PORT || 3000;

  const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });

  // In case of an error
  app.on('error', (appErr, appCtx) => {
    console.error('app error', appErr.stack);
    console.error('on url', appCtx.req.url);
    console.error('with headers', appCtx.req.headers);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
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

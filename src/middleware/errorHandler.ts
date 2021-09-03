// import { errorResponse } from '../helpers';
import {RequestHandler} from "express";

const errorHandler: (() => RequestHandler) = (() => async (req, res, next) => {

  console.log('req')
  // if (err && err.message === 'validation error') {
  //   let messages = err.errors.map((e) => e.field);
  //   if (messages.length && messages.length > 1) {
  //     messages = `${messages.join(', ')} are required fields`;
  //   } else {
  //     messages = `${messages.join(', ')} is required field`;
  //   }
  //   return errorResponse(req, res, messages, 400, err);
  // }
  next()
});

export default errorHandler;

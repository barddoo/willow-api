import {errorResponse} from '../helpers';
import {ErrorRequestHandler} from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  errorResponse(res, 'Unexpected Error', 500, err);
};


export default errorHandler;

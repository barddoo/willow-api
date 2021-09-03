import {Response} from 'express'

export const errorResponse = (
  res: Response,
  errorMessage: string = 'Something went wrong',
  code: number = 500,
  error: any = {},
) => res.status(500).json({
  code,
  errorMessage,
  error
});

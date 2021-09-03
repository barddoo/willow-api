export const successResponse = (req, res, data) => res.send(data);

export const errorResponse = (
  req,
  res,
  errorMessage = 'Something went wrong',
  code = 500,
  error = {},
) => res.status(500).json({
  code,
  errorMessage,
  error,
  data: null,
  success: false,
});

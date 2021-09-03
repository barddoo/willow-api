const { body } = require('express-validator');

// eslint-disable-next-line import/prefer-default-export
export const register = [body('english_name').isString(),
  body('klingon_name').isString()];

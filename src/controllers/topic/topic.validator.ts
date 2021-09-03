const { body } = require('express-validator');

export const register = [body('english_name').isString(),
  body('klingon_name').isString()];

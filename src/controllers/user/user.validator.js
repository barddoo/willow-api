const { body } = require('express-validator');

export const register = [body('name').isString(), body('email').isEmail()];

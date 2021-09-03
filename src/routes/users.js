import express from 'express';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

router.get('/users', userController.allUsers);
router.post('/users',
  ...userValidator.register,
  userController.register);

router.get('/users/:userId', userController.findUser);
router.get('/users/:userId/listTopics', userController.listTopicByUser);
router.post('/users/:userId/associateTopic', userController.associateTopic);

module.exports = router;

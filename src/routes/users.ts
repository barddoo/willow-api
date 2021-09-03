import * as express from 'express';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

router.get('/', userController.allUsers);
router.post('/',
  ...userValidator.register,
  userController.register);
router.get('/:userId', userController.findUser);

router.get('/:userId/topics', userController.listTopicByUser);
router.post('/:userId/topics', userController.associateTopic);
router.delete('/:userId/topics', userController.removeAssociatedTopic);

export default router;

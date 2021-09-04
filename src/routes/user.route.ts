import * as express from 'express';

import * as userController from '../service/user/user.service';
import * as userValidator from '../service/user/user.validator';

const router = express.Router();

router.get('/', userController.allUsers);
router.post('/',
  ...userValidator.register,
  userController.register);
router.get('/:userId', userController.findUser);

router.get('/:userId/topics', userController.listTopicByUser);

export default router;

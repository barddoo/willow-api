import {Router} from 'express';

import * as topicController from '../service/topic/topic.service';
import * as topicValidator from '../service/topic/topic.validator';

const router = Router();

router.get('/', topicController.all);
router.get('/:topicId', topicController.find);
router.post(
  '/',
  ...topicValidator.register,
  topicController.register,
);
router.get('/:topicId/users', topicController.listUsersByTopic);


export default router;

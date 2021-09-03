import {Router} from 'express';

import * as topicController from '../controllers/topic/topic.controller';
import * as topicValidator from '../controllers/topic/topic.validator';

const router = Router();

router.get('/', topicController.all);
router.get('/:topicId', topicController.find);
router.post(
  '/',
  ...topicValidator.register,
  topicController.register,
);
router.get('/:topicId/topics', topicController.listUsersByTopic);


export default router;

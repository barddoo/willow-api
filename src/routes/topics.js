import express from 'express';

import * as topicController from '../controllers/topic/topic.controller';
import * as topicValidator from '../controllers/topic/topic.validator';

const router = express.Router();

router.get('/topics', topicController.all);
router.get('/topics/:topicId', topicController.find);
router.post(
  '/topics',
  ...topicValidator.register,
  topicController.register,

);

module.exports = router;

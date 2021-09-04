import * as express from 'express';

import * as associationController from '../service/userTopic/userTopic.service';

const router = express.Router();

router.post('/', associationController.associate);
router.delete('/', associationController.removeAssociation);

export default router;

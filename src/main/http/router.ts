import { Router } from 'express';
import adapt from 'main/adapters/expressAdapter';
import makeGetHealthController from 'main/factories/getHealthController';

const router = Router();

router.get('/health', adapt(makeGetHealthController()));

export default router;

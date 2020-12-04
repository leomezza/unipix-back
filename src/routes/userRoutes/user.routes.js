import { Router } from 'express';

import userPrivateRoutes from './private/routes';

const router = Router();

router.use('/private', userPrivateRoutes);

export default router;

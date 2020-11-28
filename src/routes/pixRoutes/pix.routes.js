import { Router } from 'express';

import pixPrivateRoutes from './private/routes';

const router = Router();

router.use('/private', pixPrivateRoutes);

export default router;

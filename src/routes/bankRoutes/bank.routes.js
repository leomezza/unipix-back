import { Router } from 'express';

import bankPrivateRoutes from './private/routes';

const router = Router();

router.use('/private', bankPrivateRoutes);

export default router;

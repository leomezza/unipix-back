import { Router } from 'express';

import pixRoutes from './pixRoutes/pix.routes';
import authRoutes from './authRoutes/auth.routes';

import authProtectedRoute from '../middlewares/authProtectedRoute';

const router = Router();

router.use('/auth', authRoutes);

router.use(authProtectedRoute.privateRouteMiddleware);

router.use('/pix', pixRoutes);

export default router;

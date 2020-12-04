import { Router } from 'express';

import authRoutes from './authRoutes/auth.routes';
import userRoutes from './userRoutes/user.routes';
import pixRoutes from './pixRoutes/pix.routes';


import authProtectedRoute from '../middlewares/authProtectedRoute';

const router = Router();

router.use('/auth', authRoutes);

router.use(authProtectedRoute.privateRouteMiddleware);

router.use('/user', userRoutes);

router.use('/pix', pixRoutes);

export default router;

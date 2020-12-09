import { Router } from 'express';

import bankService from '../../../services/bank.service';

import ApplicationError from '../../../errors/ApplicationError';

const router = Router();

router.get('/list', async (req, res, next) => {
  try {
    const { id } = req.user;

    const bank = await bankService.get();

    return res.status(200).json(bank);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});


export default router;

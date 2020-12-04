import { Router } from 'express';

import userService from '../../../services/user.service';

import ApplicationError from '../../../errors/ApplicationError';

const router = Router();

router.get('/list/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getOne(id);

    return res.status(200).json(user);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

router.put('/update/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateObject = req.body;

    const updatedUser = await userService.updateOne(updateObject, id);

    return res.status(200).json(updatedUser);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

export default router;

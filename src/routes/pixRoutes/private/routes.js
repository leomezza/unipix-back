import { Router } from 'express';

import Pix from '../../../models/Pix';

import pixMapper from '../../../mappers/pix.mapper';
import pixService from '../../../services/pix.service';

import ApplicationError from '../../../errors/ApplicationError';

const router = Router();

router.get('/list', async (req, res, next) => {
  try {
    const { id } = req.user;
    const { search } = req.query;

    const pix = await pixService.get(id, search);

    return res.status(200).json(pix);
  } catch (error) {
    return next(new ApplicationError(error));
  }
});

// router.get('/list/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     const pix = await pixService.getOne(id);

//     return res.status(200).json(pix);
//   } catch (error) {
//     return next(new ApplicationError(error));
//   }
// });

// router.post('/create', async (req, res, next) => {
//   try {
//     const { id } = req.user;
//     const newPixInfo = req.body;

//     await pixService.create(newPixInfo, id);

//     return res.status(201).json();
//   } catch (error) {
//     return next(new ApplicationError(error));
//   }
// });

// router.put('/update/:id', Pix.validateUpdateParams, async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const updateObject = pixMapper.updateOne(req.body);

//     const updatedPix = await pixService.updateOne(updateObject, id);

//     return res.status(200).json(updatedPix);
//   } catch (error) {
//     return next(new ApplicationError(error));
//   }
// });

// router.delete('/delete/:id', async (req, res, next) => {
//   try {
//     const { id } = req.params;

//     await pixService.deleteOne(id);

//     return res.status(200).json();
//   } catch (error) {
//     return next(new ApplicationError(error));
//   }
// });

export default router;

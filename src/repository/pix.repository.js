import Pix from '../models/Pix';

import ApplicationError from '../errors/ApplicationError';
import Bank from '../models/Bank';

class PixRepository {
  constructor(PixModel) {
    this.Pix = PixModel;
  }

  async get(id, type) {
    try {
      //const regex = new RegExp(search, 'i');

      // const pix = await this.Pix.find({ owner: id, title: regex });
      const pix = await this.Pix.find({ owner: id, ownertype: type }).populate('bank');
      
      return pix;
    } catch (error) {
      console.log(error);
      throw new ApplicationError();
    }
  }

  async getOne(id) {
    const pix = await this.Pix.findById(id).populate('bank');

    return pix;
  }

  async create(newPix, id) {
    try {
      const pix = new this.Pix({ ...newPix, owner: id });

      await pix.save();
    } catch (error) {
      throw new ApplicationError(
        {
          message: 'Error while performing a database operation',
          type: 'ProjectRepository - create method',
          status: 409,
        },
      );
    }
  }

  async updateOne(updateObject, id) {
    const updatedPix = await this.Pix.findByIdAndUpdate(
      id,
      updateObject,
      { new: true, useFindAndModify: false },
    );

    return updatedPix;
  }

  async deleteOne(id) {
    await this.Pix.findByIdAndDelete(id);
  }

}

export default new PixRepository(Pix);

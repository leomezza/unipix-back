import Pix from '../models/Pix';

import ApplicationError from '../errors/ApplicationError';

class PixRepository {
  constructor(PixModel) {
    this.Pix = PixModel;
  }

  async get(id, search) {
    try {
      const regex = new RegExp(search, 'i');

      const pix = await this.Pix.find({ owner: id, title: regex }).populate('tasks');

      return pix;
    } catch (error) {
      throw new ApplicationError();
    }
  }

  async getOne(id) {
    const pix = await this.Pix.findById(id).populate('tasks');

    return pix;
  }

  async create(newPix, id) {
    try {
      const pix = new this.Pix({ ...newPix, owner: id });

      await pix.save();
    } catch (error) {
      throw new ApplicationError(
        {
          message: 'Error while performing an database operation',
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

  // async addTaskToProject({ pixId, taskId }) {
  //   await this.Pix.findByIdAndUpdate(
  //     pixId,
  //     { $push: { tasks: taskId } },
  //     { useFindAndModify: false },
  //   );
  // }

  // async removeTaskfromProject(pixId, taskId) {
  //   await this.Pix.findByIdAndUpdate(
  //     pixId,
  //     { $pull: { tasks: taskId } },
  //     { useFindAndModify: false },
  //   );
  // }
}

export default new PixRepository(Pix);

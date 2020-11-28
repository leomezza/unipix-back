import pixRepository from '../repository/pix.repository';

import ApplicationError from '../errors/ApplicationError';

class PixService {
  constructor(pixRepo) {
    this.pixRepository = pixRepo;
  }

  async get(id, type) {
    try {
      //const pixFromDb = await this.pixRepository.get(id, search);
      const pixFromDb = await this.pixRepository.get(id, type);

      return pixFromDb;
    } catch (error) {
      throw new ApplicationError({ message: error.message, type: 'Projects - Get Method', status: 502 });
    }
  }

  async getOne(id) {
    const pixFromDb = await this.pixRepository.getOne(id);

    return pixFromDb;
  }

  async create(newPix, id) {
    await this.pixRepository.create(newPix, id);
  }

  async updateOne(updateObject, id) {
    try {
      const updatedPix = await this.pixRepository.updateOne(updateObject, id);

      return updatedPix;
    } catch (error) {
      throw new ApplicationError({ message: error.message, status: 504 });
    }
  }

  async deleteOne(id) {
    await this.pixRepository.deleteOne(id);
  }
}

export default new PixService(pixRepository);

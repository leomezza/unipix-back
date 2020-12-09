// import Pix from '../models/Pix';

import ApplicationError from '../errors/ApplicationError';
import Bank from '../models/Bank';

class PixRepository {
  constructor(BankModel) {
    this.Bank = BankModel;
  }

  async get(id, type) {
    try {

      const bank = await this.Bank.find();
      
      return bank;
    } catch (error) {
      console.log(error);
      throw new ApplicationError();
    }
  }

}

export default new PixRepository(Bank);

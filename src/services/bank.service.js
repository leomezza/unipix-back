import bankRepository from '../repository/bank.repository';

import ApplicationError from '../errors/ApplicationError';

class BankService {
  constructor(pixRepo) {
    this.bankRepository = pixRepo;
  }

  async get() {
    try {
      //const pixFromDb = await this.pixRepository.get(id, search);
      const bankFromDb = await this.bankRepository.get();

      return bankFromDb;
    } catch (error) {
      throw new ApplicationError({ message: error.message, type: 'Bank - Get Method', status: 502 });
    }
  }
}

export default new BankService(bankRepository);

import userRepository from '../repository/user.repository';
import passwordUtils from '../utils/password.utils';

import ApplicationError from '../errors/ApplicationError';

class UserService {
  constructor(userRepo) {
    this.userRepository = userRepo;
  }

  async getOne(id) {
    const userFromDb = await this.userRepository.getOne(id);

    return userFromDb;
  }

  async updateOne(updateObject, id) {
    try {
      let updatedUser = {};
      if (updateObject.password) {
        const userCryptPwd = { ...updateObject, password: passwordUtils.encrypt(updateObject.password) };
        updatedUser = await this.userRepository.updateOne(userCryptPwd, id);

      } else {
        updatedUser = await this.userRepository.updateOne(updateObject, id);
      }

      return updatedUser;
    } catch (error) {
      throw new ApplicationError({ message: error.message, status: 504 });
    }
  }

}

export default new UserService(userRepository);

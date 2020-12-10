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
      const userCryptPwd = { ...updateObject, password: passwordUtils.encrypt(updateObject.password) };
      const updatedUser = await this.userRepository.updateOne(userCryptPwd, id);

      return updatedUser;
    } catch (error) {
      throw new ApplicationError({ message: error.message, status: 504 });
    }
  }

}

export default new UserService(userRepository);

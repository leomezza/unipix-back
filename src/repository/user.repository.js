import UserEntity from '../models/User';

class UserRepository {
  constructor() {
    this.User = UserEntity.User;
  }

  async getOne(id) {
    const user = await this.User.findById(id);
    const userNoPassword = user.toJSON();
    delete userNoPassword.password;
    return userNoPassword;
  }

  async updateOne(newData, id) {
    const user = await this.User.findByIdAndUpdate(id, newData, { new: true, useFindAndModify: false });
    const userNoPassword = user.toJSON();
    delete userNoPassword.password;
    return userNoPassword;
  }
}

export default new UserRepository();

const bcrypt = require('bcrypt');
const BaseModel = require('./BaseModel');

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  $beforeInsert(context) {
    this.uid = faker.random.uuid();
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));

    return true;
  }

  checkPassword(password) {
    if (password) {
      const result = bcrypt.compareSync(password, this.password);

      return result;
    }

    return false;
  }
}

module.exports = User;

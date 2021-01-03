const faker = require('faker');
const BaseModel = require('./BaseModel');

class Category extends BaseModel {
  static get tableName() {
    return 'categories';
  }

  $beforeInsert(context) {
    this.cid = faker.random.uuid();

    return true;
  }
}

module.exports = Category;

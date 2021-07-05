const faker = require('faker');
const BaseModel = require('./BaseModel');

class Unit extends BaseModel {
  static get tableName() {
    return 'customers';
  }

  $beforeInsert(context) {
    this.cid = faker.random.uuid();

    return true;
  }
}

module.exports = Unit;

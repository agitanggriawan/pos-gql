const faker = require('faker');
const BaseModel = require('./BaseModel');

class Unit extends BaseModel {
  static get tableName() {
    return 'units';
  }

  $beforeInsert(context) {
    this.unid = faker.random.uuid();

    return true;
  }
}

module.exports = Unit;

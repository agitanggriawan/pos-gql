const faker = require('faker');
const BaseModel = require('./BaseModel');

class Product extends BaseModel {
  static get tableName() {
    return 'products';
  }

  $beforeInsert(context) {
    this.pid = faker.random.uuid();

    return true;
  }

  static get relationMappings() {
    const SubCategory = require('./SubCategory');
    const Unit = require('./Unit');

    return {
      sub_category: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: SubCategory,
        join: {
          from: 'products.sub_category_id',
          to: 'sub_categories.id',
        },
      },
      unit: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Unit,
        join: {
          from: 'products.unit_id',
          to: 'units.id',
        },
      },
    };
  }
}

module.exports = Product;

const faker = require('faker');
const BaseModel = require('./BaseModel');

class SubCategory extends BaseModel {
  static get tableName() {
    return 'sub_categories';
  }

  $beforeInsert(context) {
    this.scid = faker.random.uuid();

    return true;
  }

  static get relationMappings() {
    const Category = require('./Category');

    return {
      category: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'sub_categories.category_id',
          to: 'categories.id',
        },
      },
    };
  }
}

module.exports = SubCategory;

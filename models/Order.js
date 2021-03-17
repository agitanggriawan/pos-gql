const faker = require('faker');
const BaseModel = require('./BaseModel');
const OrderProduct = require('./OrderProduct');

class Order extends BaseModel {
  static get tableName() {
    return 'orders';
  }

  $beforeInsert(context) {
    this.oid = faker.random.uuid();

    return true;
  }

  static get relationMappings() {
    return {
      order_products: {
        relation: BaseModel.HasManyRelation,
        modelClass: OrderProduct,
        join: {
          from: 'orders.id',
          to: 'orders_products.order_id',
        },
      },
    };
  }
}

module.exports = Order;

const BaseModel = require('./BaseModel');

class OrderProduct extends BaseModel {
  static get tableName() {
    return 'orders_products';
  }
}

module.exports = OrderProduct;

exports.up = async (knex) => {
  await knex.schema.createTable('orders_products', (t) => {
    t.increments('id').primary();
    t.integer('order_id')
      .references('id')
      .inTable('orders')
      .notNullable()
      .index();
    t.integer('product_id')
      .references('id')
      .inTable('products')
      .notNullable()
      .index();
    t.double('price').notNullable();
    t.double('quantity').notNullable();
    t.double('sub_total').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('orders_products');
};

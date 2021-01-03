exports.up = async (knex) => {
  await knex.schema.createTable('products', (t) => {
    t.increments('id').primary();
    t.integer('sub_category_id')
      .references('id')
      .inTable('sub_categories')
      .notNullable()
      .index();
    t.integer('unit_id')
      .references('id')
      .inTable('units')
      .notNullable()
      .index();
    t.string('pid').notNullable();
    t.string('name').notNullable();
    t.string('password').notNullable();
    t.double('purchase_price').notNullable();
    t.double('selling_price').notNullable();
    t.double('first_stock').notNullable();
    t.double('last_stock').notNullable();
    t.double('minimal_stock').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('products');
};

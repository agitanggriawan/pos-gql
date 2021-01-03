exports.up = async (knex) => {
  await knex.schema.createTable('sub_categories', (t) => {
    t.increments('id').primary();
    t.integer('category_id')
      .references('id')
      .inTable('categories')
      .notNullable()
      .index();
    t.string('scid').notNullable();
    t.string('name').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('sub_categories');
};

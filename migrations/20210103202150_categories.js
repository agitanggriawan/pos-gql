exports.up = async (knex) => {
  await knex.schema.createTable('categories', (t) => {
    t.increments('id').primary();
    t.string('cid').notNullable();
    t.string('name').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('categories');
};

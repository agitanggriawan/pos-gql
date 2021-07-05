exports.up = async (knex) => {
  await knex.schema.createTable('customers', (t) => {
    t.increments('id').primary();
    t.string('cid').notNullable();
    t.string('name').notNullable();
    t.string('address');
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('customers');
};

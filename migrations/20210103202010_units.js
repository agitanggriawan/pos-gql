exports.up = async (knex) => {
  await knex.schema.createTable('units', (t) => {
    t.increments('id').primary();
    t.string('unid').notNullable();
    t.string('name').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('units');
};

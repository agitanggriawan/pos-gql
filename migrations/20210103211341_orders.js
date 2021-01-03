exports.up = async (knex) => {
  await knex.schema.createTable('orders', (t) => {
    t.increments('id').primary();
    t.string('oid').notNullable();
    t.string('name').notNullable();
    t.double('amount_paid').notNullable();
    t.double('grand_total').notNullable();
    t.double('change').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('orders');
};

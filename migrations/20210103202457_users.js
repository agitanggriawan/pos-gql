exports.up = async (knex) => {
  await knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('uid').notNullable();
    t.string('name').notNullable();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.string('role').notNullable();
    t.timestamps(true, true);
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable('users');
};

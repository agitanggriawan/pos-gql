exports.up = async function (knex) {
  await knex.schema.alterTable('products', (t) => {
    t.dropColumn('password');
  });
};

exports.down = async function (knex) {
  await knex.schema.alterTable('products', (t) => {
    t.string('password').notNullable();
  });
};

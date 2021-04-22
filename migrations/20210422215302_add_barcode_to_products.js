exports.up = async function (knex) {
  await knex.schema.alterTable('products', (t) => {
    t.string('barcode');
  });

  const triggerScript = `
  CREATE OR REPLACE FUNCTION auto_update_stock() RETURNS TRIGGER AS $$
  BEGIN
    UPDATE products
    SET last_stock = last_stock - New.quantity
    WHERE id = New.product_id;
  RETURN NULL;
	END;
  $$ LANGUAGE plpgsql;

  DROP TRIGGER IF EXISTS trigger_update_stock ON orders_products;

  CREATE TRIGGER trigger_update_stock
    AFTER INSERT ON orders_products
    FOR EACH ROW EXECUTE PROCEDURE auto_update_stock();
  `;

  await knex.raw(triggerScript);
};

exports.down = async function (knex) {
  await knex.schema.alterTable('products', (t) => {
    t.dropColumn('barcode');
  });
};

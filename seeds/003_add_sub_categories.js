const faker = require('faker');

exports.seed = function (knex) {
  const data = [
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Telur',
    },
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Mie',
    },
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Minyak',
    },
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Minuman',
    },
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Detergen / Sabun',
    },
    {
      scid: faker.random.uuid(),
      category_id: 1,
      name: 'Rentengan',
    },
  ];

  return knex('sub_categories')
    .del()
    .then(function () {
      return knex('sub_categories').insert(data);
    });
};

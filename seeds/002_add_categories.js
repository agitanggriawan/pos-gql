const faker = require('faker');

exports.seed = function (knex) {
  const data = [
    {
      cid: faker.random.uuid(),
      name: 'Sembako',
    },
    {
      cid: faker.random.uuid(),
      name: 'Snack',
    },
    {
      cid: faker.random.uuid(),
      name: 'Obat',
    },
    {
      cid: faker.random.uuid(),
      name: 'Pampers',
    },
  ];

  return knex('categories')
    .del()
    .then(function () {
      return knex('categories').insert(data);
    });
};

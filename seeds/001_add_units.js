const faker = require('faker');

exports.seed = function (knex) {
  const data = [
    {
      unid: faker.random.uuid(),
      name: 'Karton',
    },
    {
      unid: faker.random.uuid(),
      name: 'Kg',
    },
    {
      unid: faker.random.uuid(),
      name: 'Strip',
    },
    {
      unid: faker.random.uuid(),
      name: 'Pcs',
    },
    {
      unid: faker.random.uuid(),
      name: 'Slop',
    },
    {
      unid: faker.random.uuid(),
      name: 'Renteng',
    },
  ];

  return knex('units')
    .del()
    .then(function () {
      return knex('units').insert(data);
    });
};

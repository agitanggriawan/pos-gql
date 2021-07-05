const faker = require('faker');

exports.seed = function (knex) {
  const data = [
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
    {
      cid: faker.random.uuid(),
      name: faker.name.findName(),
      address: faker.address.streetAddress(),
    },
  ];

  return knex('customers')
    .del()
    .then(function () {
      return knex('customers').insert(data);
    });
};

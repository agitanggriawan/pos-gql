const faker = require('faker');
const bcrypt = require('bcrypt');

exports.seed = function (knex) {
  const data = [
    {
      uid: faker.random.uuid(),
      name: 'Admin',
      email: 'admin@pos.com',
      password: bcrypt.hashSync('password', bcrypt.genSaltSync(10)),
      role: 'ADMIN',
    },
  ];

  return knex('users')
    .del()
    .then(function () {
      return knex('users').insert(data);
    });
};

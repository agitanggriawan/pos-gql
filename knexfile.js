module.exports = {
  local: {
    client: 'postgresql',
    connection: {
      database: 'pos_local',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  development: {
    client: 'postgresql',
    connection: {
      database: 'pos_development',
      user: 'postgres',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'd2tjt2k05mgd2r',
      user: 'dkcjfnnqfxgoch',
      password:
        'f340e0417d7a15c872102c6fcd810c3be563ad378ce5a6b6e25267750bebbef0',
      host: 'ec2-52-205-61-60.compute-1.amazonaws.com',
      port: 5432,
    },
    pool: {
      min: 10,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

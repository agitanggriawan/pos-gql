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
    // connection: {
    //   database: 'd98fhvsh4r9j49',
    //   user: 'fddubvugtgesyw',
    //   password: '218b0e27ca5d0c116e420d3021eefcbfa746c5edaf174066fe851f8ca7b7ccfb',
    //   host: 'ec2-18-214-119-135.compute-1.amazonaws.com',
    //   port: 5432,
    // },
    connection:
      'postgres://fddubvugtgesyw:218b0e27ca5d0c116e420d3021eefcbfa746c5edaf174066fe851f8ca7b7ccfb@ec2-18-214-119-135.compute-1.amazonaws.com:5432/d98fhvsh4r9j49?ssl=true',
    pool: {
      min: 10,
      max: 100,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    ssl: true,
  },
};

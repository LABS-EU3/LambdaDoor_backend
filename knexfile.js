require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.PG_DEV,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
  test: {
    client: 'pg',
    connection: process.env.PG_TEST,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};

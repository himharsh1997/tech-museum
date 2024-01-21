// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'social_platform',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './app/migrations'
    },
    seeds: {
      directory: './seeds/dev'
    },
    pool: {
      min: 2,
      max: 10
    },
  },
  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'social_platform',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME || 'social_platform',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

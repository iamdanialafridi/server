    // strapi-api/config/database.js
    module.exports = ({ env }) => ({
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5000),
          database: env('DATABASE_NAME', 'fashion'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', 'afridi4you'),
          schema: env('DATABASE_SCHEMA', 'public'), // Not required
          ssl:false,
        },
        debug: false,
      },
    });
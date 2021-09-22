export default {
  messages_db: {
    client: "postgresql",
    connection: {
      database: "message_db",
      port: 5433,
      user: "postgres",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  products_db: {
    client: "postgresql",
    connection: {
      database: "knex-tuto",
      port: 5433,
      user: "postgres",
      password: "1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

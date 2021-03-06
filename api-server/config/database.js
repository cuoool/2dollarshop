module.exports = {
  development: {
    dialect: process.env.DB_CONNECTION || 'mysql',
    database: process.env.DB_NAME || '2dollarshop',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'secret',
  },
  test: {
    dialect: process.env.DB_CONNECTION || 'mysql',
    database: process.env.DB_NAME || '2dollarshop',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306',
    username: process.env.DB_USER || 'dev',
    password: process.env.DB_PASSWORD || 'secret',
  },
  production: {
    dialect: process.env.DB_CONNECTION,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
};

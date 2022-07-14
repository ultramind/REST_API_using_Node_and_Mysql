const { createPool } = require('mysql')

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.MYSQL_DB,
  connectionLimit: process.env.MSQL_CON_LIMIT
})

// exporting the pool varriable
module.exports = pool

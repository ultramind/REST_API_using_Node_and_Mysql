const { createPool } = require('mysql')

const pool = createPool({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASS,
  database: 'restdb',
  connectionLimit: 10
})

// exporting the pool varriable
module.exports = pool

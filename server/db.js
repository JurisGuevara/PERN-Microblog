const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'microblog'
})

module.exports = pool

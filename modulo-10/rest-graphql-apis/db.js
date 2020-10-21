const mysql = require('mysql2/promise')

//without connection pool

module.exports = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cat-products'
})  


//with connection pool
/*module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'cat-products',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}) */
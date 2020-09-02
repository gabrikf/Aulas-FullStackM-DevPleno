const mysql = require('mysql2/promise')

const run = async() => {
  try{
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cat-products'
    })  
    try{
      const [ results ] = await connection.query('insert into products (product, price) values (?, ?)', ['Bala Chicletes', 50])
      await connection.query('insert into categories_products (product_id, category_id) values (?, ?)', [results.insertId, 2])
    }catch(err){
      console.log(err)
    }
  }catch(err){
    console.log(err)
  }
}
run()
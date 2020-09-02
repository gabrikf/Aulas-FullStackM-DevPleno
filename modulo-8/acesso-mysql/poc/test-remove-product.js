const mysql = require('mysql2/promise')

const run = async() => {
  try{
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'cat-products'
    })  
    try{
      const [ results ] = await connection.query('delete from products where id = ? limit 1', [3])
      console.log('Products', results)
    }catch(err){
      console.log(err)
    }
  }catch(err){
    console.log(err)
  }
}
run()
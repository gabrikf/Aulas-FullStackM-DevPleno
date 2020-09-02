const sqlite = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite.Database(databaseFile, (err) => {
      if(err){
        reject(err)
      } else{
        resolve(db)
      }
  })
})

const run = (db, query, values) => new Promise ((resolve, reject) => {
  db.run(query, values, err => {
    if(err){
      reject(err)
    }else{
      resolve()
    }

  })
})

const updateProducts = async() => {
  const db = await initDB('banco.sqlite')
  await run(db, `update products set product=? where id=? `, ['Produto Escova de Macaco updated', 8])
  //lembrete: apagar tudo de categories_prducts, adicionar o que ficou.
  // ou remover somente quem foi removido. ou adicionar somente quem foi adicionado.
  console.log('Product Updated')
}
updateProducts().catch(err => {
  console.log(err)
})
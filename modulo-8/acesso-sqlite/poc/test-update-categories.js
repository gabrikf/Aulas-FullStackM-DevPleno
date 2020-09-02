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

const updateCateroies = async() => {
  const db = await initDB('banco.sqlite')
  await run(db, `update categories set category=? where id=? `, ['category updated', 8])
  console.log('Categories created!')
}
updateCateroies().catch(err => {
  console.log(err)
})
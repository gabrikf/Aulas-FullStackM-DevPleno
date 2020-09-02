const sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('banco.sqlite', (err) => {
  console.log(err, 'começou mano')
})
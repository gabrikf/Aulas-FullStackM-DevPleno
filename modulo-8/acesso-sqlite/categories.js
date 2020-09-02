const db = require('./db')

const init = database => {
  const create = async(data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `insert into categories (id, category) values (?, ?)`,data)
  }

  const findAll = async() => {
    const dbConn = await db.init(database)
    return await db.query(dbConn, `select * from categories`)
  }

  const remove = async(id) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `delete from categories where id = ?`,[id])
  }

  const update = async(id, data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `update categories set category=? where id=? `, [...data, id])
  }
  const findAllPaginated = async({ PageSize = 1, currentPage = 0 }) => {
    const dbConn = await db.init(database)
    const records =  await db.query(dbConn, `select * from categories limit ${currentPage*PageSize},${PageSize+1}`)
    if(records.length > PageSize) {
      records.pop()
    }
    return {
      data: records,
      hasNext: records.length >= PageSize
    }
  }
  return {
    findAll,
    findAllPaginated,
    remove,
    create,
    update
  }
}

module.exports = init
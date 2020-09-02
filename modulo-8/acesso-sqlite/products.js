const db = require('./db')
const { queryWithParams } = require('./db')

const init = database => {
  const create = async(data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `insert into products (id, product, price) values (?, ?, ?)`,data)
  }

const findAll = async() => {
  const dbConn = await db.init(database)
    //return await db.query(dbConn, `select * from products left join images on products.id = images.product_id group by images.product_id`)
  const products = await db.query(dbConn, 'select * from products')
  const condition = products.map(produto => produto.id).join(',')
  const images = await db.query(dbConn, 'select * from images where product_id in ('+condition+')group by product_id')
  const mapImages = images.reduce((antigo, atual) => {
    return {
      ...antigo,
      [atual.product_id]: atual
    }
  }, {})
  return products.map(product => {
    return {
      ...product,
      image: mapImages[product.id]
    }
  })
}

const findAllByCategory = async(categoryId) => {
  const dbConn = await db.init(database)
    //return await db.query(dbConn, `select * from products left join images on products.id = images.product_id group by images.product_id`)
  const products = await db.query(dbConn, `select * from products where id in (select product_id from categories_products where category_id = ${categoryId})`)
  const condition = products.map(produto => produto.id).join(',')
  const images = await db.query(dbConn, 'select * from images where product_id in ('+condition+')group by product_id')
  const mapImages = images.reduce((antigo, atual) => {
    return {
      ...antigo,
      [atual.product_id]: atual
    }
  }, {})
  return products.map(product => {
    return {
      ...product,
      image: mapImages[product.id]
    }
  })
}

  const remove = async(id) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `delete from products where id = ?`,[id])
    await db.queryWithParams(dbConn, `delete from images where product_id = ?`,[id])
    await db.queryWithParams(dbConn, `delete from categories_products where product_id = ?`,[id])
  }

  const update = async(id, data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `update products set product=?, price=? where id=? `, [...data, id])
  }

  const updateCategories = async(id, categories) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `delete from categories_products where product_id = ?`, [id])
    for await(const category of categories){
      await db.queryWithParams(dbConn, `insert into categories_products (product_id, category_id) values (?, ?)`, [id, category])
    }
  }

  const addImage = async(productId, data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `insert into images (id, url, description, product_id) values (?, ?, ?, ?)`,[...data, productId])
  }


  const findAllPaginated = async({ PageSize = 1, currentPage = 0 }) => {
    const dbConn = await db.init(database)
    const records =  await db.query(dbConn, `select * from products limit ${currentPage*PageSize},${PageSize+1}`)
    
    const condition = records.map(produto => produto.id).join(',')
    const images = await db.query(dbConn, 'select * from images where product_id in ('+condition+')group by product_id')
    const mapImages = images.reduce((antigo, atual) => {
      return {
        ...antigo,
        [atual.product_id]: atual
      }
    }, {})

    if(records.length > PageSize) {
      records.pop()
    }
    return {
      data: records.map(product => {
        return {
          ...product,
          image: mapImages[product.id]
        }
      }),
      hasNext: records.length >= PageSize
    }
  }
  return {
    findAll,
    findAllByCategory,
    findAllPaginated,
    remove,
    create,
    update,
    updateCategories,
    addImage
  }
}

module.exports = init
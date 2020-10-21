
const init = connection => {
  const create = async(data) => {
    const conn = await connection
    await conn.query('insert into products (product, price) values (?, ?)', data)
  }
  
  const remove = async(id) => {
    const conn = await connection
    await conn.query('delete from products where id=? limit 1', [id])
  }

  const update = async(id, data) => {
    const conn = await connection
    await conn.query('update products set product = ?, price = ? where id=?', [...data, id])
  }

  const findImages = async(results) => {
    if (results.length === 0) {
      return []
    }
    const conn = await connection
    const productIds = results.map(product => product.id).join(',')
    const [images] = await conn.query('select * from images where product_id in (' + productIds +') group by product_id')
    const mapImages = images.reduce((anterior, atual) => {
      return {
        ...anterior,
        [atual.product_id]: atual
      }
    }, {})
    const products = results.map(product => {
      return {
        ...product,
        images: mapImages[product.id]
      }
    })
    return products
  }

  const findById = async(id) => {
    const conn = await connection
    const [results] = await conn.query('select * from products where id = ' + id)
    const productWithImages = await findImages(results)
    return productWithImages[0]
  }

  const findAll = async() => {
    const conn = await connection
    const [results] = await conn.query('select * from products')
    return findImages(results)
  }
  const findAllPaginated = async({ PageSize = 1, currentPage = 0 }  = {}) => {
    const conn = await connection
    const [results] =  await conn.query( `select * from products limit ${currentPage*PageSize},${PageSize+1}`)
    const hasNext = results.length > PageSize

    if(results.length > PageSize) {
      results.pop()
    }
    const resultsWithImages =  await findImages(results)

    return {
      data: resultsWithImages,
      hasNext
    }
  }

  const findAllByCategory = async(categoryId) => {
    const conn = await connection
    const [results] = await conn.query('select * from products where id in (select product_id from categories_products where category_id=?) ', [categoryId])
    return findImages(results)
  }

  const addImage = async(productId, data) => {
    const conn = await connection
    await conn.query('insert into images (product_id, description, url) values (?,?,?)', [productId, ...data])
  }

  const removeImage = async(productId, imageId) => {
    const conn = await connection
    await conn.query('delete from images where product_id = ? and id = ?', [productId, imageId])
  }

  const updateCategories = async(productId, categoryIds) => {
    const conn = await connection
    await conn.query('START TRANSACTION')
    await conn.query('delete from categories_products where product_id =?', [productId])
    for await(const categoryId of categoryIds){
      await conn.query('insert into categories_products (category_id, product_id) values (?, ?)', [categoryId, productId])
    }
    await conn.query('COMMIT') //<- SE COMMIT(SE DEU CERTO) // ROLLBACK(SE DEU ALGO ERRADO)
  }

  return {
    create,
    remove,
    removeImage,
    update,
    updateCategories,
    findAll,
    findById,
    findAllByCategory,
    findAllPaginated,
    addImage
  }
}

module.exports = init 
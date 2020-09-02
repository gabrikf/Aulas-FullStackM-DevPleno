const db = require('./db')
const categories = require('./categories')(db)
const products = require('./products')(db)

const test = async() => {
  //await categories.create(['Categoria nova mano, criada na api'])
  //await categories.remove([4])
  //await categories.update(3, ['Categoria dahora atualizada man'])
  /*const cats = await categories.findAll()
  console.log(cats)*/
  //await products.addImage(4,['foto de: bala chicletes', 'www.balachicletes.com'])
  await products.updateCategories(1,[6])
  const prods = await products.findAllPaginated()
  console.log(prods)
}
test()
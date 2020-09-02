const categories = require('./categories')('./banco.sqlite')
const products = require('./products')('./banco.sqlite')

const test = async() => {
  //await categories.create([2, 'categoria legal'])
  //await categories.remove(8)
  //await categories.update(7, ['categoria dahorinha mano'])
  //const cats = await categories.findAll()
  //console.log(cats)
  //await categories.remove()
  /*console.log('cp: 0', await categories.findAllPaginated({ PageSize: 2, currentPage: 0}))
  console.log('cp: 1', await categories.findAllPaginated({ PageSize: 2, currentPage: 1}))
  console.log('cp: 2', await categories.findAllPaginated({ PageSize: 2, currentPage: 2}))
  console.log('cp: 2', await categories.findAllPaginated({ PageSize: 2, currentPage: 3}))*/
  //await products.create([3, 'carrinho de mão manual', 3000])
  //await products.addImage(2,[3, '<opa.com>','<imagem do tal carrinho>'])
  //await products.update(8, ['Borboleta de controle remoto', 2500])
  //await products.remove(3)
  //console.log(await products.findAll())
  //console.log('cp: 0', await products.findAllPaginated({ PageSize: 2, currentPage: 0}))
  //await products.updateCategories(1, [1, 2])
  console.log(await products.findAllByCategory(1))
}
test()
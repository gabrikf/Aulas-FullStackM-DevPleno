const categories = require('./categories')
const products = require('./products')

const testes = async() => {
  /*await categories.create({
    category: 'Categoria TOP demaaaaaaaaaais!'
  })
  /*await categories.remove('M3Tj8lbdLXjaP11DiH1H')*/
  /*await categories.update('SwWgot6zehwF1MdlgqvO', {categodry: 'está escrito errado'})*/
  /*const cats2 = await categories.findAll()
  console.log(cats2)*/
  /*const cats = await categories.findAllPaginated({ pageSize: 1, startAfter:'Categoria TOP demaaaaaaaaaais!'})
    console.log(cats)*/
  /* await products.create({
    product: 'Produto para escovar pelo de capivara',
    price: 997,
    categories: ['K0amDlukKMDlzXWehyPU']
  })*/
  /*await products.update('6FORrWXvol1wgH0DoAlX', {
    product: 'Nome bem loco',
    categories: ['SwWgot6zehwF1MdlgqvO']
  })*/
  /*await products.remove('6FORrWXvol1wgH0DoAlX')*/
  /*const prod = await products.findAll()
  console.log(prod)*/
  const prod2 = await products.findAllPaginated({ pageSize:1, startAfter:'JpIp7jXn4nYZdhrRzPCY' })
  console.log(prod2)
  /*await products.addImage('LdEMEXwOeMR9CqHnFuyF', { description: 'Imagem para mostrar como se penteia uma capivara', url: 'www.capivarasbemdoidas.com.br'})*/
}
testes()


const db = require('../../db')
const Product = require('../../models/product')(db)
const { ApolloError } = require('apollo-server-express')

const getAllProducts = async (context, { filter }) => {
    let products = null
    if (filter && filter.categoryId) {
      products = await Product.findAllByCategory(filter.categoryId)
    }
    else {
      products =  await Product.findAll()
    }
  return products
}

const createProduct = async (context, { input }) => {
  const { product, price } = input
  await Product.create([product, price])
  return {
    product, price
  }
}
const createImageOnProduct = async (context, { productId, input }) => {
  const { description, url } = input
  await Product.addImage(productId, [description, url])
  return {
    description,
    url
  }
}

const deleteProduct = async (context, { id }) => {
  await Product.remove(id)
  return true
}

const updateProduct = async (context, { id, input }) => {
  const oldProduct = await Product.findById(id)
  if (!oldProduct){
    throw new ApolloError('Product not found.')
  }
  
  if (input.product){
    oldProduct.product = input.product
  }
  if (input.price){
    oldProduct.price = input.price
  }
  await Product.update(id, [oldProduct.product, oldProduct.price])
  
  if(input.categories) {
    //atualizar categoria
    try {
      await Product.updateCategories(id, input.categories)
    } catch(err){
      throw new ApolloError('ProductCategory not found.')
    }
  }
  return oldProduct
}

const deleteImageOnProduct = async (context, { productId, id }) => {
  await Product.removeImage(productId, id)
  return true
}

module.exports = {
  getAllProducts, createProduct, updateProduct, deleteProduct, createImageOnProduct, deleteImageOnProduct 
}
const db = require('../../db')
const Category = require('../../models/categories')(db)
//const { ApolloError } = require('apollo-server-express')

const createCategory = async (context, { input }) => {
  const { category } = input
  await Category.create([category])
  return {
    category
  }
}

const returnAllCategories = async () => {
  categories =  await Category.findAll()
  return categories
}

const updateCategory = async (context, { id, input }) => {
  const oldCategory = await Category.findAll(id)
  oldCategory.category = input.category
  await Category.update(id, [oldCategory.category])
  return oldCategory
}
/* 
const oldCategory = await Category.findAll(id)
if (!oldCategory){
  throw new ApolloError('Category not found.')
}
if (input.category){
  oldCategory.category = input.category
}
await Category.update(id, [oldCategory.category])
return oldCategory
}
*/

const deleteCategory = async (context, { id }) => {
  await Category.remove(id)
  return true
}

module.exports = {
  createCategory,
  returnAllCategories,
  updateCategory,
  deleteCategory
  
}
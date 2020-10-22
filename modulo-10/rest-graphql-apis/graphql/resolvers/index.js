const { 
  getAllProducts, 
  createProduct, 
  deleteProduct, 
  updateProduct, 
  createImageOnProduct, 
  deleteImageOnProduct,
} = require('./products')
const { AuthenticationError } = require('apollo-server-express')

const needsAuth = resolver => {
  return async (parent, args, context) => {
    if(!context.user) {
      throw new AuthenticationError('needs authentication')
    }
    return resolver(parent, args, context)
  }
}

const { 
  createCategory,
  returnAllCategories,
  updateCategory,
  deleteCategory
} = require('./categories')


const resolvers = {
  Query: {
    getAllProducts: needsAuth(getAllProducts),
    returnAllCategories: needsAuth(returnAllCategories)
  },
  Mutation: {
    createProduct:needsAuth(createProduct), 
    updateProduct:needsAuth(updateProduct),
    createImageOnProduct:needsAuth(createImageOnProduct),
    deleteProduct:needsAuth(deleteProduct),
    deleteImageOnProduct:needsAuth(deleteImageOnProduct),
    createCategory:needsAuth(createCategory),
    updateCategory:needsAuth(updateCategory),
    deleteCategory:needsAuth(deleteCategory)
  }
}

module.exports = resolvers
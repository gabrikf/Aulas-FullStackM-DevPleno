const { 
  getAllProducts, 
  createProduct, 
  deleteProduct, 
  updateProduct, 
  createImageOnProduct, 
  deleteImageOnProduct,
} = require('./products')
const { 
  createCategory,
  returnAllCategories,
  updateCategory,
  deleteCategory
} = require('./categories')

const resolvers = {
  Query: {
    getAllProducts,
    returnAllCategories
  },
  Mutation: {
    createProduct, 
    updateProduct,
    createImageOnProduct,
    deleteProduct,
    deleteImageOnProduct,
    createCategory,
    updateCategory,
    deleteCategory
  }
}

module.exports = resolvers
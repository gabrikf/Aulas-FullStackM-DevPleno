const express = require('express')
const router = express.Router()
const categoriesController = require('../controller/categoriesController')

router.delete('/:id', categoriesController.deleteCategory)

//router.patch('/:id', productsController.patch)

router.put('/:id', categoriesController.updateCategory)

router.post('/', categoriesController.create)

router.get('/', categoriesController.returnCategories)

//router.get('/:id',productsController.getById)

//router.post('/:id/images', productsController.createImage)

//router.delete('/:productId/images/:id', productsController.removeImage)



module.exports = router

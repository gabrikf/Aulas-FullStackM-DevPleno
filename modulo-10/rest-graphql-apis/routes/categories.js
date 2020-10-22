const express = require('express')
const router = express.Router()
const categoriesController = require('../controller/categoriesController')
const { needsAuth } = require('../utils/auth')

router.use(needsAuth)

router.post('/', categoriesController.create)

router.get('/', categoriesController.returnCategories)

router.put('/:id', categoriesController.updateCategory)

router.delete('/:id', categoriesController.deleteCategory)


module.exports = router

const express = require('express')
const router = express.Router()
const productsController = require('../controller/productsController')
const { needsAuth } = require('../utils/auth')


// para todas as rotas
router.use(needsAuth)

router.delete('/:id', productsController.remove)

router.patch('/:id', productsController.patch)

router.put('/:id', productsController.put)

router.post('/', productsController.create)

router.get('/',  productsController.getAll)

router.get('/:id', productsController.getById)

router.post('/:id/images', productsController.createImage)

router.delete('/:productId/images/:id', productsController.removeImage)

// outra forma, somente para uma rota
//router.get('/:id',needsAuth, productsController.getById)

module.exports = router
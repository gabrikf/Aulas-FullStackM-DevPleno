const express = require('express')
const router = express.Router()
const productsController = require('../controller/productsController')

router.delete('/:id', productsController.remove)

router.patch('/:id', productsController.patch)

router.put('/:id', productsController.put)

router.post('/', productsController.create)

router.get('/', productsController.getAll)

router.get('/:id',productsController.getById)

router.post('/:id/images', productsController.createImage)

router.delete('/:productId/images/:id', productsController.removeImage)



module.exports = router
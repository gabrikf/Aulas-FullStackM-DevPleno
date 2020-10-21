const db = require('../db')
const Category = require('../models/categories')(db)

const create = async (req, res) => {
  const { category } = req.body
  await Category.create([category])
  res.send({
    success: true,
    data : req.body
  })
}

const returnCategories = async (req, res) => {
  const category = await Category.findAll()
  res.send(category)
}

const updateCategory = async (req, res) => {
  //alterar produtos
  const { category } = req.body
  await Category.update(req.params.id, [category])
  res.send({
    success: true,
    data : req.body
  })
}

const deleteCategory = async (req, res) => {
  await Category.remove(req.params.id)
  res.send({
  success: true
})
}

module.exports = {
  create,
  returnCategories,
  updateCategory,
  deleteCategory
}

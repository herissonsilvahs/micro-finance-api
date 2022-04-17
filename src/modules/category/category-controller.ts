import { iCategory } from './db/models/Category';
import Category from './db/models/Category'
import { Router } from 'express'
const categoryRoutes = Router()

categoryRoutes.post('/', async function (req, res) {
  const body = req.body
  const category = await Category.create<iCategory>(body)
  // const categoryCreated = await category.save()
  res.status(201).json(category)
})

export default categoryRoutes

import { Router } from 'express'
import accountRoutes from './modules/account/account-controller'
import categoryRoutes from './modules/category/category-controller'
import institutionRoutes from './modules/institution/institution-controller'
import transactionRoutes from './modules/transactions/transaction-controller'
const routers = Router()

routers.use('/account', accountRoutes)
routers.use('/category', categoryRoutes)
routers.use('/institution', institutionRoutes)
routers.use('/transaction', transactionRoutes)

export default routers

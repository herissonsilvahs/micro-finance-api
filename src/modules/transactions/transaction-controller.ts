import { Router, Request, Response } from 'express'
import TransactionService from './transaction-service';
const transactionRoutes = Router()

interface iSearchParams {
  limit?: string
  page?: string
  query?: string
}

class TransactionController {

  private readonly transactionService = new TransactionService()

  create = async (req: Request, res: Response): Promise<void> => {
    const body = req.body
    try {
      const created = await this.transactionService.create(body)
      res.status(201).json(created)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  search = async (req: Request, res: Response): Promise<void> => {
    const params: iSearchParams = {
      limit: req.params?.limit,
      page: req.params?.page,
      query: req.params?.query
    }

    const result = await this.transactionService
      .search(params.page, params.limit, params.query)

    res.status(200).json(result)
  }
}

const controller = new TransactionController()

transactionRoutes.get('/', controller.search)
transactionRoutes.post('/', controller.create)

export default transactionRoutes

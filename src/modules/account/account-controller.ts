import { Request, Response, Router } from 'express'
import AccountService from './account-service'
const accountRoutes = Router()

class AccountController {
  private readonly accountService = new AccountService()

  create = async (req: Request, res: Response) => {
    const body = req.body
    const created = await this.accountService.create(body)
    res.status(201).json(created)
  }
}

const controller = new AccountController()

accountRoutes.post('/', controller.create)

export default accountRoutes

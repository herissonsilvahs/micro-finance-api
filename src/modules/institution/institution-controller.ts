import InstitutionService from './institution-service';
import { Router, Request, Response } from 'express'
const institutionRoutes = Router()

class InstitutionController {

  private readonly institutionService = new InstitutionService()

  create = async (req: Request, res: Response): Promise<void> => {
    const body = req.body
    const created = await this.institutionService.create(body)
    res.status(201).json(created)
  }
}

const controller = new InstitutionController()

institutionRoutes.post('/', controller.create)

export default institutionRoutes

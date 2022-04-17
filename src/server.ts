import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MongoDBService from './integrations/MongoDBService'
import routes from './app.routes'

const PORT = process.env.PORT || 3000

export class Server {
  app: Express
  constructor() {
    this.app = express()
  }

  setup() {
    dotenv.config({ debug: !process.env?.PRODUCTION })
    this.app.use(cors())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use('/v1', routes)
  }

  async setupDB() {
    try {
      await MongoDBService.connect()
      console.log('DB Connected!')
    } catch (error) {
      console.log('error: ', error)
    }
  }

  start() {
    this.app.listen(PORT, () => console.log(`Server up at port: ${PORT}`))
  }

  getApp(): Express {
    return this.app
  }
}

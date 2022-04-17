import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MongoDBService from './integrations/MongoDBService'
import routes from './app.routes'
// import './db/models/Account';
// import './db/models/Institution';

dotenv.config({
  debug: !process.env.PRODUCTION
})

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/v1', routes)

MongoDBService.connect()
  .then(() => console.log('DB Connected!'))
  .catch(error => console.log('error: ', error))

app.listen(PORT, () => console.log(`Server up at port: ${PORT}`))

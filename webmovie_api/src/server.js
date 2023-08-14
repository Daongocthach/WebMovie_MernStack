import express from 'express'
import { connectDb, getDB } from './config/mongodb'
import { env } from './config/enviroment'
import { apiV1 } from './routes/v1'

const hostname = env.APP_HOST
const port = env.APP_PORT

connectDb()
  .then(() => console.log('Connectted successfully to database server!'))
  .then(() => bootServer())
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

const bootServer = () => {
  const app = express()

  //Enable req.body data
  app.use(express.json())

  app.use('/v1', apiV1)

  app.listen(port, hostname, () => {
    console.log(`I'm running at ${hostname}:${port}/`)
  })
}
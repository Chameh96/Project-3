import express from 'express'
import mongoose from 'mongoose'
//import Recipe from './models/recipe.js'
import { port, dbURI } from './config/environment.js'
import router from './config/router.js'
import path from 'path'

const app = express()

const __dirname = path.resolve()

// const port = 4000
// const dbURI = 'mongodb://127.0.0.1:27017/aioli'

const startServers = async () => {
  try {
    await mongoose.connect(dbURI)
    console.log('🔥 Database connected successfully')

    app.use(express.static(`${__dirname}/client/build`))

    //Parser
    app.use(express.json())

    //Logger
    app.use((req, _res, next) => {
      console.log(`Incoming request: ${req.method} - ${req.url}`)
      next()
    })

    //Router
    app.use('/api', router)

    app.use('/*', (_, res) =>
      res.sendFile(`${__dirname}/client/build/index.html`)
    )

    //CATCH ALL
    app.use((_req, res) => {
      res.status(404).json({ message: 'Route Not Found' })
    })

    app.listen(port, () => console.log(`Server up and running on port ${port}`))
  } catch (err) {
    console.log(err)
    console.log(`ERROR: Something has gone wrong`)
  }
}

startServers()

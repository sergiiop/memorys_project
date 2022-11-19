import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import { connectDB } from './config/dbConn.js'
import { logEvents } from './middleware/logger.js'
import { config } from './config/config.js'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
const app = express()
const PORT = config.port

connectDB()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use('/posts', postRoutes)
app.use('/user', userRoutes)

//Mongo Atlas

mongoose.connection.once('open', () => {
  console.log('Connected to Mongo DB')
  app.listen(PORT, () => console.log(`Server running on ${PORT}`))
})

mongoose.connection.on('error', (err) => {
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log'
  )
})

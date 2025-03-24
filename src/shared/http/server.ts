import 'dotenv/config'
import express, { NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { AppError } from '@shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.use((error, request, response, next: NextFunction) => {
  if (error instanceof AppError) {
    response.status(error.statuscode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.log(error)
  response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

app.listen(3000, () => {
  console.log('Server Started on port 3000')
})

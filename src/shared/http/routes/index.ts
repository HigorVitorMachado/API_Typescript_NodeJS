import { AppError } from '@shared/errors/AppError'
import { response, Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  throw new AppError('Acesso negado')
  response.json({ message: 'olá dev' })
})
export { routes }

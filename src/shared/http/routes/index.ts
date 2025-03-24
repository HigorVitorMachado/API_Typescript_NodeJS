import { response, Router } from 'express'
import { request } from 'http'

const routes = Router()

routes.get('/', (request, response) => {
  response.json({ message: 'olá dev' })
})
export { routes }

import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.json({ message: 'Bem vindo' })
})

app.listen(3000, () => {
  console.log('Server Started on port 3000')
})

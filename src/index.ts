import express from 'express'
import HttpException from 'http-exception'
import routers from './routers'
import { createDb } from './db'
import pkg from '../package.json'

console.log(`Launching ${pkg.name} v${pkg.version}`)

const app = express()

app.set('db', createDb())

app.use(express.json())

app.use('/', ...routers)
app.use(() => {
  throw HttpException.notFound()
})

app.listen(8080, () =>
  console.log(`App ${pkg.name} started listening on port 8080`)
)

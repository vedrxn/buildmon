import express from 'express'
import HttpException from 'http-exception'
import { createDb } from './db'
import routers from './routers'
import pkg from '../package.json'

const main = async () => {
  console.log(`Launching ${pkg.name} v${pkg.version}`)

  const app = express()

  app.set('db', await createDb())

  app.use(express.json())

  app.use('/', ...routers)
  app.use(() => {
    throw HttpException.notFound()
  })

  app.listen(8080, () =>
    console.log(`App ${pkg.name} started listening on port 8080`)
  )
}

main()

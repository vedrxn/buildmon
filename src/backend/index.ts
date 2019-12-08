import express from 'express'
import HttpException from 'http-exception'
import { createDb } from './db/db'
import routers from './routers'
import pkg from '../../package.json'

const main = async () => {
  console.log(`Launching ${pkg.name} v${pkg.version}`)

  const app = express()

  app.set('db', await createDb())

  app.use(express.json())

  app.use('/api', ...routers)
  app.use(() => {
    throw HttpException.notFound()
  })

  // @ts-ignore @types/express doesn't recognize this signature
  app.use((err, req, res, next) => {
    const _err = err instanceof Error ? err : new Error()

    const error =
      _err instanceof HttpException ? _err : new HttpException(err.message)

    res.status(error.status).json({
      ...error,
      message: error.message,
      stack: error.stack
    })
  })

  const port = 8081

  app.listen(port, () =>
    console.log(`App ${pkg.name} started listening on port ${port}`)
  )
}

main().catch(console.log)

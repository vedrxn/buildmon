import express from 'express'
import routers from './routers'
import pkg from '../package.json'

console.log(`Launching ${pkg.name} v${pkg.version}`)

const app = express()

app.use('/', ...routers)

app.listen(8080, () =>
  console.log(`App ${pkg.name} started listening on port 8080`)
)

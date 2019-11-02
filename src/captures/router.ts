import express from 'express'
import capturesRouter from './routers/capturesRouter'

export default express.Router().use(capturesRouter)

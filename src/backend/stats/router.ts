import express from 'express'
import statsRouter from './routers/statsRouter'

export default express.Router().use(statsRouter)

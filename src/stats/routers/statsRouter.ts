import express from 'express'
import HttpException from 'http-exception'
import { Db } from '../../db'

const router = express.Router()

router
  .route('/stats')
  .post((req, res, next) => {
    const db: Db = req.app.get('db')

    db.stats.insert(req.body, (error, doc) => {
      if (error) {
        return next(HttpException.internalServerError())
      }

      res.json(doc)
    })
  })

export default router

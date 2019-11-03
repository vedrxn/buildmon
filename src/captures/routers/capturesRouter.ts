import express from 'express'
import HttpException from 'http-exception'
import { Db } from '../../db'

const router = express.Router()

router
  .route('/captures')
  .get((req, res, next) => {
    const db: Db = req.app.get('db')

    db.captures.find({}, (error, docs) => {
      if (error) {
        return next(HttpException.internalServerError())
      }

      res.json(docs)
    })
  })

export default router

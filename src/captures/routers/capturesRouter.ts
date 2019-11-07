import express from 'express'
import HttpException from 'http-exception'
import { Db } from '../../db'

const router = express.Router()

router
  .route('/captures')
  .get((req, res, next) => {
    const db: Db = req.app.get('db')

    db.captures.read()
      .then(captures => res.json(captures.get('state')))
      .catch(error => next(HttpException.internalServerError()))
  })

export default router

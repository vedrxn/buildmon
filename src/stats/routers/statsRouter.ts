import express from 'express'
import HttpException from 'http-exception'
import lodash from 'lodash'
import { Db } from '../../db'

const router = express.Router()

router
  .route('/stats')
  .post((req, res, next) => {
    const db: Db = req.app.get('db')

    db.stats
      .read()
      .then(stats => {
        const state = <lodash.CollectionChain<any[]>>stats.get('state')
        
        return state.push(req.body).write()
      })
      .then(stats => res.json(req.body))
      .catch(error => next(HttpException.internalServerError()))
  })

export default router

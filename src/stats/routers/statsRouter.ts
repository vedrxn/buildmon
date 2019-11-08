import express from 'express'
import HttpException from 'http-exception'
import lodash from 'lodash'
import { Stats } from '../models'
import { createId, Db } from '../../db'

const router = express.Router()

router
  .route('/stats')
  .post((req, res, next) => {
    const db: Db = req.app.get('db')

    db.stats
      .read()
      .then(collection => {
        const state = <lodash.CollectionChain<Stats>>collection.get('state')

        const stats: Stats = {
          ...req.body,
          id: createId()
        }
        
        return state.push(stats).last().write()
      })
      .then(stats => res.json(stats))
      .catch(error => next(HttpException.internalServerError()))
  })

export default router

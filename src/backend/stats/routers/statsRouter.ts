import express from 'express'
import asyncHandler from 'express-async-handler'
import HttpException from 'http-exception'
import lodash from 'lodash'
import {
  getActiveCapture,
  selectCapturesDocuments,
  updateCapture
} from '../../captures/collections/captures'
import { Capture, utc } from '../../captures/models/capture'
import { Db } from '../../db/model'
import {
  getStatsByIds,
  insertStats,
  selectStatsDocuments
} from '../collections/stats'
import { createStats, Stats } from '../models/stats'

const router = express.Router()

router
  .route('/stats')
  .get(
    asyncHandler(async (req, res) => {
      const db: Db = req.app.get('db')

      const statsDocuments = await selectStatsDocuments(db)

      const stats = req.query.ids
        ? getStatsByIds(statsDocuments.value(), req.query.ids)
        : statsDocuments.value()

      res.json(stats)
    })
  )
  .post(
    asyncHandler(async (req, res, next) => {
      const db: Db = req.app.get('db')

      const capturesDocuments = await selectCapturesDocuments(db)
      const activeCapture = getActiveCapture(capturesDocuments.value())

      if (!activeCapture) {
        return next(HttpException.internalServerError())
      }

      const stats = await insertStats(db, createStats(req.body))

      await updateCapture(db, {
        ...activeCapture,
        modifiedDate: utc(),
        stats: [...activeCapture.stats, stats.id]
      })

      res.json(stats)
    })
  )

export default router

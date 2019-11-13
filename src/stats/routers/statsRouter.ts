import express from 'express'
import asyncHandler from 'express-async-handler'
import lodash from 'lodash'
import {
  getActiveCapture,
  insertCapture,
  selectCapturesDocuments,
  updateCapture
} from '../../captures/collections/captures'
import {
  addCaptureStats,
  Capture,
  createEphemeralCapture
} from '../../captures/models/capture'
import { Db } from '../../db'
import { insertStats, selectStatsDocuments } from '../collections/stats'
import { createStats, Stats } from '../models/stats'

const router = express.Router()

router.route('/stats').post(
  asyncHandler(async (req, res, next) => {
    const db: Db = req.app.get('db')

    const capturesDocuments = await selectCapturesDocuments(db)

    const activeCapture = getActiveCapture(capturesDocuments.value())
    const _activeCapture = await (activeCapture
      ? Promise.resolve(activeCapture)
      : insertCapture(db, createEphemeralCapture({ active: true })))

    const statsDocuments = await selectStatsDocuments(db)
    const stats = await insertStats(db, createStats(req.body))

    await updateCapture(db, addCaptureStats(_activeCapture, stats))

    res.json(stats)
  })
)

export default router

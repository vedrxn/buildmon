import express from 'express'
import asyncHandler from 'express-async-handler'
import {
  insertCapture,
  selectCapturesDocuments,
  setActiveCapture
} from '../collections/captures'
import { createCapture } from '../models/capture'
import { Db } from '../../db/model'

const router = express.Router()

router
  .route('/captures')
  .post(
    asyncHandler(async (req, res) => {
      const db: Db = req.app.get('db')

      const capture = await insertCapture(db, createCapture(req.body))
      const _capture = await setActiveCapture(db, capture)

      res.json(_capture)
    })
  )
  .get(
    asyncHandler(async (req, res) => {
      const db: Db = req.app.get('db')

      res.json(await selectCapturesDocuments(db))
    })
  )

export default router

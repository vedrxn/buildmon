import express from 'express'
import asyncHandler from 'express-async-handler'
import { selectCapturesDocuments } from '../collections/captures'
import { Db } from '../../db'

const router = express.Router()

router.route('/captures').get(
  asyncHandler(async (req, res, next) => {
    const db: Db = req.app.get('db')

    res.json(await selectCapturesDocuments(db))
  })
)

export default router

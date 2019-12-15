import lowdb from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'
import nanoid from 'nanoid'
import {
  deleteCapture,
  getEphemeralCapture,
  getHistoryCapture,
  insertCapture,
  setActiveCapture,
  selectCapturesDocuments
} from '../captures/collections/captures'
import {
  CaptureType,
  createEphemeralCapture,
  createHistoryCapture
} from '../captures/models/capture'
import { Db, File } from './model'

const initDb = async (): Promise<Db> => {
  const files = [File.Captures, File.Stats]

  const promises = files.map(file => {
    const adapter = new FileAsync(file, {
      defaultValue: { documents: [] }
    })

    return lowdb(adapter)
  })

  const [captures, stats] = await Promise.all(promises)

  return {
    captures,
    stats
  }
}

export const createDb = async (): Promise<Db> => {
  const db = await initDb()

  const capturesDocuments = await selectCapturesDocuments(db)
  const captures = capturesDocuments.value()

  const historyCapture = await getHistoryCapture(captures)

  if (!historyCapture) {
    await insertCapture(db, createHistoryCapture())
  }

  const oldEphemeralCapture = await getEphemeralCapture(captures)

  if (oldEphemeralCapture) {
    await deleteCapture(db, oldEphemeralCapture)
  }

  const newEphemeralCapture = createEphemeralCapture()

  await insertCapture(db, newEphemeralCapture)
  await setActiveCapture(db, newEphemeralCapture)

  return db
}

export const createId = nanoid

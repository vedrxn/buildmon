import lodash from 'lodash'
import { Capture, CaptureType } from '../models/capture'
import { Db } from '../../db/model'

export const selectCapturesDocuments = async (db: Db) => {
  const collection = await db.captures.read()

  return <lodash.CollectionChain<Capture>>collection.get('documents')
}

export const insertCapture = async (
  db: Db,
  capture: Capture
): Promise<Capture> => {
  const documents = await selectCapturesDocuments(db)

  return documents
    .push(capture)
    .last()
    .write()
}

export const updateCapture = async (
  db: Db,
  capture: Capture
): Promise<Capture> => {
  const documents = await selectCapturesDocuments(db)
  const index = documents.findIndex(item => item.id === capture.id).value()

  if (index < 0) {
    throw new Error()
  }

  await documents.splice(index, 1, capture).write()

  return capture
}

export const deleteCapture = async (
  db: Db,
  capture: Capture
): Promise<undefined> => {
  const documents = await selectCapturesDocuments(db)

  await documents.remove({ id: capture.id }).write()

  return undefined
}

export const setActiveCapture = async (db: Db, capture: Capture) => {
  const documents = await selectCapturesDocuments(db)

  await documents
    .map(capture => ({
      ...capture,
      active: false
    }))
    .write()

  const activeCapture = {
    ...capture,
    active: true
  }

  await updateCapture(db, activeCapture)
}

export const getCapturesByType = (
  type: CaptureType,
  captures: Capture[]
): Capture[] => captures.filter(capture => capture.type === type)

export const getEphemeralCapture = (captures: Capture[]): Capture | undefined =>
  getCapturesByType(CaptureType.Ephemeral, captures)[0]

export const getActiveCapture = (captures: Capture[]): Capture | undefined =>
  captures.find(capture => Boolean(capture.active))

import lodash from 'lodash'
import { Capture } from '../models/capture'
import { Db } from '../../db'

export const selectCapturesDocuments = async (db: Db) => {
  const collection = await db.captures.read()

  return <lodash.CollectionChain<Capture>>collection.get('documents')
}

export const getActiveCapture = (captures: Capture[]): Capture | undefined =>
  captures.find(capture => Boolean(capture.active))

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

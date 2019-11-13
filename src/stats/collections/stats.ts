import lodash from 'lodash'
import { Db } from '../../db'
import { Stats } from '../models/stats'

export const selectStatsDocuments = async (db: Db) => {
  const collection = await db.stats.read()

  return <lodash.CollectionChain<Stats>>collection.get('documents')
}

export const insertStats = async (db: Db, stats: Stats): Promise<Stats> => {
  const documents = await selectStatsDocuments(db)

  return documents
    .push(stats)
    .last()
    .write()
}

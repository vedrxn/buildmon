import lodash from 'lodash'
import lowdb from 'lowdb'
import nanoid from 'nanoid'
import FileAsync from 'lowdb/adapters/FileAsync'

export enum Collection {
  Captures = 'captures',
  Stats = 'stats'
}

export interface Db {
  [Collection.Captures]: lowdb.LowdbAsync<any>
  [Collection.Stats]: lowdb.LowdbAsync<any>
}

enum File {
  Captures = './tmp/captures-collection.json',
  Stats = './tmp/stats-collection.json'
}

export const createDb = async (): Promise<Db> => {
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

export const createId = nanoid

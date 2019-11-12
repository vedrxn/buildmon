import to from 'await-to-ts'
import lowdb from 'lowdb'
import nanoid from 'nanoid'
import FileAsync from 'lowdb/adapters/FileAsync'

export interface Db {
  captures: lowdb.LowdbAsync<any>
  stats: lowdb.LowdbAsync<any>
}

enum File {
  Captures = './tmp/captures-collection.json',
  Stats = './tmp/stats-collection.json'
}

export const createDb = async (): Promise<Db> => {
  const files = [File.Captures, File.Stats]
  const promises = files.map(file => {
    const adapter = new FileAsync(file, {
      defaultValue: { state: [] }
    })

    return lowdb(adapter)
  })


  const [error, [captures, stats]] = await to(Promise.all(promises))

  if (error) {
    throw error
  }

  return {
    captures,
    stats
  }
}

export const createId = nanoid

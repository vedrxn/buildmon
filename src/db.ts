import lowdb from 'lowdb'
import FileAsync from 'lowdb/adapters/FileAsync'

export interface Db {
  captures: lowdb.LowdbAsync<any>
  stats: lowdb.LowdbAsync<any>
}

enum File {
  Captures = './tmp/captures-collection.json',
  Stats = './tmp/stats-collection.json'
}

export const createDb = (): Promise<Db> => {
  const files = [File.Captures, File.Stats]
  const promises = files.map(file => {
    const adapter = new FileAsync(file, {
      defaultValue: { state: [] }
    })

    return lowdb(adapter)
  })

  return Promise.all(promises).then(collections => ({
    captures: collections[0],
    stats: collections[1]
  }))
}

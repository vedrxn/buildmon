import DataStore from 'nedb'

export interface Db {
  stats: Nedb
}

export const createDb = (): Db => ({
  stats: new DataStore()
})

import DataStore from 'nedb'

export interface Db {
  captures: Nedb
  stats: Nedb
}

export const createDb = (): Db => ({
  captures: new DataStore(),
  stats: new DataStore()
})

import lodash from 'lodash'
import lowdb from 'lowdb'

export interface Db {
  captures: lowdb.LowdbAsync<any>
  stats: lowdb.LowdbAsync<any>
}

export enum File {
  Captures = './tmp/captures-collection.json',
  Stats = './tmp/stats-collection.json'
}

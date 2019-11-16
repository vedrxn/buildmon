import { createId } from '../../db/db'

export interface Stats {
  [key: string]: any
  id: string
}

export const createStats = (options?: Partial<Stats>): Stats => ({
  id: createId(),
  ...options
})

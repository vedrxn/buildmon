import { createId } from '../../db/db'

export interface Stats {
  [key: string]: any
  id: string
}

export const createStats = (options?: {}): Stats => ({
  id: createId(),
  ...options
})

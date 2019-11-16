import { createId } from '../../db/db'
import { Stats } from '../../stats/models/stats'

export enum CaptureType {
  Ephemeral = 'Ephemeral',
  History = 'History',
  Session = 'Session'
}

export interface Capture {
  active: boolean
  id: string
  stats: string[]
  type: keyof typeof CaptureType
}

export const createEphemeralCapture = (
  options?: Partial<Capture>
): Capture => ({
  active: false,
  id: createId(),
  stats: [],
  type: CaptureType.Ephemeral,
  ...options
})

export const addCaptureStats = (capture: Capture, stats: Stats): Capture => ({
  ...capture,
  stats: [...capture.stats, stats.id]
})

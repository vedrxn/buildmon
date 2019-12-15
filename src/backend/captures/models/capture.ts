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
  name: string
  stats: string[]
  type: keyof typeof CaptureType
}

export const createCapture = (options?: {}): Capture => ({
  active: false,
  id: createId(),
  name: 'Buildmon Capture',
  stats: [],
  type: CaptureType.Session,
  ...options
})

export const createEphemeralCapture = (options?: {}): Capture =>
  createCapture({
    name: 'Ephemeral Capture',
    type: CaptureType.Ephemeral,
    ...options
  })

export const createHistoryCapture = (options?: {}): Capture =>
  createCapture({
    name: 'History Capture',
    type: CaptureType.History,
    ...options
  })

export const addCaptureStats = (capture: Capture, stats: Stats): Capture => ({
  ...capture,
  stats: [...capture.stats, stats.id]
})

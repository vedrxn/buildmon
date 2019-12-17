import { createId } from '../../db/db'
import { Stats } from '../../stats/models/stats'

export enum CaptureType {
  Ephemeral = 'Ephemeral',
  History = 'History',
  Session = 'Session'
}

export interface Capture {
  active: boolean
  createdDate: string
  id: string
  modifiedDate: string
  name: string
  stats: string[]
  type: keyof typeof CaptureType
}

export const utc = () => new Date().toUTCString()

export const createCapture = (options?: {}): Capture => {
  const date = utc()

  return {
    active: false,
    createdDate: date,
    id: createId(),
    modifiedDate: date,
    name: 'Buildmon Capture',
    stats: [],
    type: CaptureType.Session,
    ...options
  }
}

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

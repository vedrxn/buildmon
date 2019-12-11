import axios from 'axios'

export const createCapture = (payload?: any) =>
  axios.post('/api/captures', payload)

export const getCaptures = () => axios.get('/api/captures')

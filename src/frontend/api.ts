import axios from 'axios'

export const getCaptures = () => axios.get('/api/captures')

import axios, { AxiosResponse } from 'axios'

export const createCapture = (payload?: any): Promise<AxiosResponse<any[]>> =>
  axios.post('/api/captures', payload)

export const getCaptures = () => axios.get('/api/captures')

export const getStats = (ids: string[]): Promise<AxiosResponse<any[]>> => {
  const idsQueryParams = ids.map(id => `ids[]=${id}`).join('&')

  return axios.get(`/api/stats?${idsQueryParams}`)
}

import * as api from '../../api'

export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS'

export const getStatsSuccess = (payload: any[]) => ({
  payload,
  type: GET_STATS_SUCCESS
})

export const getStats = (ids: string[]) => async (dispatch: any) => {
  const response = await api.getStats(ids)
  dispatch(getStatsSuccess(response.data))

  return response.data
}

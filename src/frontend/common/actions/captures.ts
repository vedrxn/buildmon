import * as api from '../../api'

export const GET_CAPTURES_ERROR = 'GET_CAPTURES_ERROR'
export const GET_CAPTURES_REQUEST = 'GET_CAPTURES_REQUEST'
export const GET_CAPTURES_SUCCESS = 'GET_CAPTURES_SUCCESS'

export const getCapturesError = (payload: Error) => ({
  error: true,
  payload,
  type: GET_CAPTURES_ERROR
})

export const getCapturesRequest = () => ({
  type: GET_CAPTURES_REQUEST
})

export const getCapturesSuccess = (payload: any[]) => ({
  payload,
  type: GET_CAPTURES_SUCCESS
})

export const getCaptures = () => (dispatch: any) => {
  dispatch(getCapturesRequest())

  return api
    .getCaptures()
    .then(response => dispatch(getCapturesSuccess(response.data)))
}

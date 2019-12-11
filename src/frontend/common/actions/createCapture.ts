import * as api from '../../api'

export const CREATE_CAPTURE_ERROR = 'CREATE_CAPTURE_ERROR'
export const CREATE_CAPTURE_REQUEST = 'CREATE_CAPTURE_REQUEST'
export const CREATE_CAPTURE_SUCCESS = 'CREATE_CAPTURE_SUCCESS'

export const createCaptureError = (payload: Error) => ({
  error: true,
  payload,
  type: CREATE_CAPTURE_ERROR
})

export const createCaptureRequest = () => ({
  type: CREATE_CAPTURE_REQUEST
})

export const createCaptureSuccess = (payload: any[]) => ({
  payload,
  type: CREATE_CAPTURE_SUCCESS
})

export const createCapture = (payload?: any) => async (dispatch: any) => {
  dispatch(createCaptureRequest())

  const response = await api.createCapture(payload)
  dispatch(createCaptureSuccess(response.data))

  return response.data
}

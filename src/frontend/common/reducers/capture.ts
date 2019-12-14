import {
  CREATE_CAPTURE_ERROR,
  CREATE_CAPTURE_REQUEST
} from '../actions/createCapture'

interface Action {
  error?: boolean
  meta?: any
  payload?: any
  type: string
}

const initialState = {
  error: false,
  loading: false
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case CREATE_CAPTURE_ERROR:
      return {
        ...state,
        error: true,
        loading: false
      }
    case CREATE_CAPTURE_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
    default:
      return state
  }
}

import {
  GET_CAPTURES_ERROR,
  GET_CAPTURES_REQUEST,
  GET_CAPTURES_SUCCESS
} from '../actions/captures'

interface Action {
  error?: boolean
  meta?: any
  payload?: any
  type: string
}

const initialState = {
  error: false,
  loading: false,
  items: []
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_CAPTURES_ERROR:
      return {
        ...state,
        error: true
      }
    case GET_CAPTURES_REQUEST:
      return {
        ...state,
        error: false,
        loading: true
      }
    case GET_CAPTURES_SUCCESS:
      return {
        ...state,
        error: false,
        items: action.payload,
        loading: false
      }
    default:
      return state
  }
}

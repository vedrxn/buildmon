import { CREATE_CAPTURE_SUCCESS } from '../actions/createCapture'
import {
  GET_CAPTURES_ERROR,
  GET_CAPTURES_REQUEST,
  GET_CAPTURES_SUCCESS
} from '../actions/getCaptures'

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
    case CREATE_CAPTURE_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case GET_CAPTURES_ERROR:
      return {
        ...state,
        error: true,
        loading: false
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
        loading: false,
        items: action.payload
      }
    default:
      return state
  }
}

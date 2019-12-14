import { combineReducers } from 'redux'
import capture from './common/reducers/capture'
import captures from './common/reducers/captures'
import stats from './common/reducers/stats'

export default combineReducers({
  capture,
  captures,
  stats
})

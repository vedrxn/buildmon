import { combineReducers } from 'redux'
import captures from './common/reducers/captures'
import stats from './common/reducers/stats'

export default combineReducers({
  captures,
  stats
})

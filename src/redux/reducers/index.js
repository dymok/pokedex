import { combineReducers } from 'redux'
import list from './listReducer'
import item from './itemReducers'

export default combineReducers({
  list,
  item
})

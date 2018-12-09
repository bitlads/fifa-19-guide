import { combineReducers } from 'redux'
import { CONSOLE_XBOX } from '../Const'
import { SET_CONSOLE } from './Actions'

const dataState = { console: CONSOLE_XBOX }

const dataReducer = (state = dataState, action: any) => {
  switch (action.type) {
    case SET_CONSOLE:
      state = {...state,  console: action.console}
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({
  dataReducer
})

export default rootReducer

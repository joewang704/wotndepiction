import { combineReducers } from 'redux'
import game from './game'
import round from './round'
import error from './error'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  game: game,
  round: round,
  form: formReducer,
  error: error,
})

export default reducers


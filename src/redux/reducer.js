import {combineReducers} from 'redux'
import { reducer as formReducer } from 'redux-form'
import twenty48Reducer, {moduleName as twenty48Module} from '../models/2048'
import {connectRouter} from "connected-react-router";
import history from '../history'

export default combineReducers({
  form: formReducer,
  [twenty48Module]: twenty48Reducer,
  router: connectRouter(history)
})
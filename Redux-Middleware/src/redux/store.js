import {legacy_createStore,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
import {fetchDataReducer} from './reducer' 
import {logger} from "redux-logger"


export const store = legacy_createStore(fetchDataReducer,applyMiddleware(thunk,logger))
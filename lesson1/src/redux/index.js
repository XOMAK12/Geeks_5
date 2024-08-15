import {combineReducers} from 'redux'
import mainReducer from './mainReducer'
import containerReducer from './contactsReducer'

export const rootReducer = combineReducers({
    mainReducer,
    containerReducer
})
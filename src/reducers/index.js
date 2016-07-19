import { combineReducers } from 'redux'

import debugHelper from './debugHelper'

import { routerReducer } from 'react-router-redux'

let reducers = combineReducers({
    debugHelper,
    routing: routerReducer
})


export default reducers;
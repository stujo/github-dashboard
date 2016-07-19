import { combineReducers } from 'redux'

import { routerReducer } from 'react-router-redux'

let reducers = combineReducers({
    routing: routerReducer
})


export default reducers;
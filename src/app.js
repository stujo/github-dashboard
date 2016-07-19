import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, createStore } from 'redux'

import { browserHistory, Router, Route, Redirect } from 'react-router'

import { syncHistoryWithStore } from 'react-router-redux'

import 'font-awesome/css/font-awesome.css'
import 'normalize.css/normalize.css'

// Uses webpack css alias for styles
import 'css/app.css'

import routes from './routes'

import reducers from './reducers'

import createLogger from 'redux-logger';


// Dan Abramov calls this  'Provider' : https://www.youtube.com/watch?v=VJ38wSFbM3A
import StoreContextProvider from 'components/StoreContextProvider/StoreContextProvider'

const mountNode = document.querySelector('#root');

const store = createStore(reducers, applyMiddleware(createLogger()))


// Create an enhanced history that syncs navigation events with the store
const syncedHistory = syncHistoryWithStore(browserHistory, store)

// For debugging
window.githubDashboard = {
    React,
    store,
    history
};

// TODO LATER
// const history = syncHistoryWithStore(browserHistory, store)

function render() {
    ReactDOM.render(
        <StoreContextProvider store={ store }>
          <Router routes={ routes } history={ syncedHistory } />
        </StoreContextProvider>,
        mountNode
    );
}

render()
store.subscribe(render)

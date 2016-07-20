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

import { Provider } from 'react-redux';

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
        <Provider store={ store }>
          <Router routes={ routes } history={ syncedHistory } />
        </Provider>,
        mountNode
    );
}

render()
store.subscribe(render)

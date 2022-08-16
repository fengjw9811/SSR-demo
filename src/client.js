import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './routes'
import { Provider } from 'react-redux'
import createStoreInstance from './store'

const store = createStoreInstance(window?.__PRELOAD_STATE__)

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <RoutesList />
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './routes'

ReactDOM.hydrate(
    <BrowserRouter>
        <RoutesList />
    </BrowserRouter>,
    document.querySelector('#root')
)

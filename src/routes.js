import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Personal from './pages/Personal'

const RoutesList = () => {
  return (
    <div>
        <ul>
            <li><Link to={'/'}>首页</Link></li>
            <li><Link to={'/personal'}>个人中心页</Link></li>
        </ul>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/' element={<Personal />} />
        </Routes>
    </div>
  )
}

export default RoutesList

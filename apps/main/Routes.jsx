import React from 'react'
import { Route, IndexRedirect } from 'react-router'
import '../../styles'
import Root from './pages/Root'
import HomePage from './pages/Home'

let Routes = (
  <Route path='/' component={Root}>
    <IndexRedirect to='home' />
    <Route path='/home' component={HomePage} />
  </Route>
)

export default Routes

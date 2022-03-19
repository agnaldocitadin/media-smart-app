import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'

export default props => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard*' component={Dashboard} />
        </Switch>
    </BrowserRouter>
  )
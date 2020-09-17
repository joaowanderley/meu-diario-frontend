import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'
import Register from './pages/register'
import Anotations from './pages/anotation'
import NewAnotation from './pages/newAnotation'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/anotations' component={Anotations} />
        <Route path='/new/anotation' component={NewAnotation} />
      </Switch>
    </BrowserRouter>
  )
}
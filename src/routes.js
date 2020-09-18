import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { PrivateRoute } from "./helpers/authRules"

import Login from "./pages/login"
import Register from "./pages/register"
import Anotations from "./pages/anotation"
import NewAnotation from "./pages/newAnotation"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/anotations" component={Anotations} />
        <PrivateRoute path="/new/anotation" component={NewAnotation} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
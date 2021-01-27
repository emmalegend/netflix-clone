import React from 'react';
import {BrowserRouter as Router, Switch, } from 'react-router-dom';
import {IsUserRedirect, ProtectedRoute} from './helpers/routes'
import * as Routes from './constants/routes'
import {Home,Browse,SignIn,SignUp} from './pages';
import { useAuthListener } from './hooks';

function App() {
  const {user} = useAuthListener();
  return (
    <Router>
      <Switch>
      <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.HOME} exact>
        <Home />
      </IsUserRedirect>
      <ProtectedRoute user={user}  path={Routes.BROWSE} exact>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_IN} exact>
        <SignIn />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={Routes.BROWSE} path={Routes.SIGN_UP} exact>
        <SignUp />
      </IsUserRedirect>
      </Switch>
    </Router>
  )
}

export default App


import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as Routes from './constants/routes'
import {Home,Browse,SignIn,SignUp} from './pages';

function App() {
  return (
    <Router>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
      <Route exact path={Routes.BROWSE}>
        <Browse />
      </Route>
      <Route exact path={Routes.SIGN_IN}>
        <SignIn />
      </Route>
      <Route exact path={Routes.SIGN_UP}>
        <SignUp />
      </Route>
    </Router>
  )
}

export default App


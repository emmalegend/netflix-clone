import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import * as Routes from './constants/routes'
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Route exact path={Routes.HOME}>
        <Home />
      </Route>
    </Router>
  )
}

export default App


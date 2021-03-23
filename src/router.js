import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

/**
 * Page
 */

import Home from './page/home';
import Books from './page/books';

/**
 * Component
 */

import Navbar from './component/navbar';

const RouteComponent = () => {
  return (
    <Router>

      <Navbar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/books" exact>
          <Books />
        </Route>

        {/* If else, back to home */}
        <Route path="*" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default RouteComponent;
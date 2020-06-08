import React, {useEffect} from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/common/NotFound';

import Home from './components/home/Home';
import Work from './components/work/Work';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function App(props) {
  return (
    <>
      <Router render={pr => console.log(pr) } history={pr => console.log(pr) }>
        <div>
          <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/work/:id">
                <Work />
              </Route>
              <Route exact path="*">
                <NotFound />
              </Route>
            </Switch>
          <Footer /> 
        </div>
    </Router>
    </>
  );
}

export default App;

import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {Components} from './Styles';

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Components>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </Components>
    </Router>
  );
}

export default App;

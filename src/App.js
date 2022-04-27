import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Foods from './pages/Foods';
import Drinks from './pages/Drinks';
import Login from './pages/Login';
import Explore from './pages/Explore';

function App() {
  return (
    <RecipesProvider>
        <Switch>
          <Route exact path="/foods" component={ Foods } />
          <Route exact path="/drinks" component={ Drinks } />
          <Route exact path="/" component={ Login } />
          <Route exact path="/explore" component={ Explore } />
        </Switch>
    </RecipesProvider>
  );
}

export default App;

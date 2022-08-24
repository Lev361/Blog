import React from 'react'
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';

const App = () => (
    <div className="container">
      <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/blog/:id" component={Blog}/>
      </Switch>
    </div>
);

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route,IndexRoute, hashHistory } from 'react-router'
import App from './App';
import './index.css';

import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Learn from './pages/Learn';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="About" component={About}></Route>
      <Route path="Blog" component={Blog}></Route>
      <Route path="Learn" component={Learn}></Route>
    </Route>
  </Router>
  ,
  document.getElementById('root')
);

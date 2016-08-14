import 'babel-polyfill'

import '../sass/main.scss'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Work from './components/work'


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>
      <Route path="work" component={Work}></Route>
    </Route>
  </Router>
)

render(router, document.getElementById('root'))

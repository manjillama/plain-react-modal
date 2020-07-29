import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'
import Nav from './components/Nav'
import './style.css'

export default () => (
  <div className='container-md'>
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <ExampleOne />
        </Route>
        <Route path='/two'>
          <ExampleTwo />
        </Route>
        <Route path='/three'>
          <ExampleThree />
        </Route>
      </Switch>
    </Router>
  </div>
)

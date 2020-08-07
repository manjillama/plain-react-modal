import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'
import Nav from './components/Nav'
import './style.css'

export default () => (
  <div className='container-md'>
    <Router>
      <Nav />
      <Route path='/' component={ExampleOne} exact />
      <Route path='/two' component={ExampleTwo} />
      <Route path='/three' component={ExampleThree} />
    </Router>
  </div>
)

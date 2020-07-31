import React from 'react'
import { Route } from './route'
import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import ExampleThree from './components/ExampleThree'
import Nav from './components/Nav'
import './style.css'

export default () => (
  <div className='container-md'>
    <Nav />
    <Route path='/' exact>
      <ExampleOne />
    </Route>
    <Route path='/two'>
      <ExampleTwo />
    </Route>
    <Route path='/three'>
      <ExampleThree />
    </Route>
  </div>
)

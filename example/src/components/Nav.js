import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav>
    <ul className='neutralize list-inline'>
      <li>
        <Link to='/'>Example One</Link>
      </li>
      <li>
        <Link to='/two'>Example Two</Link>
      </li>
      <li>
        <Link to='/three'>Example Three</Link>
      </li>
    </ul>
  </nav>
)

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Home } from './components/home'
import { About } from './components/about'
import { Topics } from './components/topics'

import './styles.scss'

if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js').catch(function (err) {
    console.error('Unable to register service worker.', err)
  })
}

render(
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/topics'>Topics</Link>
        </li>
      </ul>
      <hr />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/topics' component={Topics} />
    </div>
  </Router>,
  document.getElementById('root')
)

import React from 'react'
import { render } from 'react-dom'

import { User } from './components/user'
import { HelloButton } from './components/helloButton'

import './styles.scss'

if (navigator.serviceWorker && process.env.NODE_ENV === 'production') {
  navigator.serviceWorker.register('sw.js').catch(function (err) {
    console.error('Unable to register service worker.', err)
  })
}

const userObj = {
  firstName: 'Matt',
  lastName: 'Levy'
}

render(
  <div>
    <User user={userObj} />
    <HelloButton />
  </div>,
  document.getElementById('root')
)

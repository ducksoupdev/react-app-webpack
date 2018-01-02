import React from 'react'

import { Button } from './button'
import { GoodbyeButton } from './goodbyeButton'

export function HelloButton () {
  function handleClick () {
    window.alert('Hello!')
  }
  return (
    <div>
      <p>Choose a button below</p>
      <Button onClick={handleClick} text='Say Hello' />
      <GoodbyeButton />
    </div>
  )
}

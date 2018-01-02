import React from 'react'

import { Button } from './button'

export function GoodbyeButton () {
  function handleClick () {
    window.alert('Goodbye!')
  }
  return <Button onClick={handleClick} text='Say Goodbye' />
}

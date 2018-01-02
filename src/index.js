import React from 'react'
import { render } from 'react-dom'

function Button (props) {
  return <button onClick={props.onClick}>{props.text}</button>
}

function HelloButton () {
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

function GoodbyeButton () {
  function handleClick () {
    window.alert('Goodbye!')
  }
  return <Button onClick={handleClick} text='Say Goodbye' />
}

render(
  <HelloButton />,
  document.getElementById('root')
)

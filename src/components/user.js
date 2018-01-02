import React from 'react'

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

export const User = (props) => {
  if (props.user) {
    return (
      <h1>
        Hello, {formatName(props.user)}!
      </h1>
    )
  } else {
    return (
      <h1>Hello, Guest!</h1>
    )
  }
}

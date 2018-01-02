import React from 'react'

function formatName (user) {
  return user.firstName + ' ' + user.lastName
}

const userObj = {
  firstName: 'Matt',
  lastName: 'Levy'
}

export const User = () => (
  <h1>
    Hello, {formatName(userObj)}!
  </h1>
)

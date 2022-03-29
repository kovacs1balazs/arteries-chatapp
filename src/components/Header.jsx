import React from 'react'

const Header = ( {name} ) => {
  return (
    <header>
        <h1>Chat App</h1>
        <h2>Welcome {name}</h2>
    </header>
  )
}

export default Header
import React from 'react'
import { Candies } from './Candies';

const Root = () => {
  return (
    <div>
      <nav>
        Goodie Bag
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <Candies />
        <p>What a nice home page for your goodies!</p>
      </main>
    </div>
  )
}

export default Root

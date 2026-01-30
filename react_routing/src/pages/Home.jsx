import React from 'react'

import Navbar from '../components/common/Navbar'

const Home = ({ count, setCount }) => {

  return (
    <div>
       <Navbar/>
       <h1>Home page</h1>
       <p>Current count: {count}</p>
       <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>
     </div>
  )
}

export default Home
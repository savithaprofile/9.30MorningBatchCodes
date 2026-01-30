import React from 'react'
import Navbar from '../components/common/Navbar'

const ContactPage = ({ setCount ,count}) => {
  return (
    <div>
        <Navbar/>
        ContactPage
         <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
  )
}

export default ContactPage
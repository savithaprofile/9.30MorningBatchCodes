import React from 'react'
import Navbar from '../components/common/Navbar'
import { useState } from 'react';

const ContactPage = ({count, setCount}) => {

  return (
 
    <div>
        <Navbar/>
        Cart page:
        count is {count}
         {/* <button onClick={() => setCount(count + 1)}>Increment</button>
       <button onClick={() => setCount(count - 1)}>Decrement</button> */}
        </div>
  )
}

export default ContactPage
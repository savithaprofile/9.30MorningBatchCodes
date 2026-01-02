import React from 'react'
import Demo from './Demo.jsx'
import "./App.css"

const App = () => {
  return (
    <div className="holder">
      App
    <h1 className='bg-primary'>heloo</h1>
      <Demo name="Jeyalakshmi" gender="female"/>
      <Demo name="Samiksha" phone="224326" />
    <h1> Im inbetween</h1>
      <Demo name="Rubini"/>
    </div>
  )
}

export default App



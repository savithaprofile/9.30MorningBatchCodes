import React from 'react'
import "./demo.css"
const Demo = ({name,gender}) => {


  return (
    <div className='text-[blue] bg-purple-400 pb-[100px]'>
        <h1>Demo</h1>
        <h2 className='text-red-500'>Hello , {name}</h2>
        <p>Ima a dummy paagragh displaying gender {gender}</p>
        
        
        </div>
  )
}

export default Demo;
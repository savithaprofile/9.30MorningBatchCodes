import React from 'react'
import Navbar from '../components/common/Navbar'

const About = ({count,setCount}) => {
  return (
    <div>
        <Navbar/>
        About
        Count is {count}
        </div>
  )
}

export default About
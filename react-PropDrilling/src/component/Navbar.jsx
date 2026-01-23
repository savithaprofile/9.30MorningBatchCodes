import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',backgroundColor:'lightgray',padding:'10px'}}>
        <h2><Link to="/">Home</Link></h2>
        <h2><Link to="/about-demo">About</Link></h2>
        <h2><Link to="/contact">Contact</Link></h2>
    </div>
  )
}

export default Navbar
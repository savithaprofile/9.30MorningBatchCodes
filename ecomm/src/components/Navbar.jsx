import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
        <ul className='nav-bar' >
          <li><Link to='/'>Home  </Link></li>
          <li><Link to='/products'>Products</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
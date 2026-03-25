import React from 'react'
import FormToBE from './pages/FormToBE';
import Home from './pages/Home';
import {BrowserRouter , Routes, Route,Link} from 'react-router-dom';
import AfterLogin from './pages/AfterLogin';
import Wishlist from './pages/Wishlist';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/formpage">Form Page</Link>
        <Link to="/afterlogin">After Login</Link>
      </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/formpage' element={<FormToBE/>}/>
          <Route path='/afterlogin' element={<AfterLogin/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/> 
        </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default App
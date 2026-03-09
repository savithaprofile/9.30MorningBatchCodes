import React from 'react'
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
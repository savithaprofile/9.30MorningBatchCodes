import React from 'react'
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { CartProvider } from './context/cartContext'

const App = () => {


  return (
    <div>
      <BrowserRouter>
      <CartProvider>
            <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
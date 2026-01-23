import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    
    </BrowserRouter>

    // <div>
    //   <Home/>
    //   <About/>
    //   <ContactPage/>
    // </div>
  )
}

export default App
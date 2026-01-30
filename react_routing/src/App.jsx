import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ContactPage from './pages/ContactPage';
import { useState } from 'react';

import { BrowserRouter,Routes, Route } from 'react-router-dom';

const App = () => {
   const [count, setCount] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home count={count} setCount={setCount} />} />
        <Route path="/contact" element={<ContactPage setCount={setCount} count={count}/>} />
        <Route path="/about" element={<About count={count}/>} />

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
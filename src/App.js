import React from 'react'
import './style.css'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Fotos from './components/Fotos'

function App() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/fotos' element={<Fotos />} />
      </Routes>
    {/* </BrowserRouter> */}
    </HashRouter>
  )
}

export default App
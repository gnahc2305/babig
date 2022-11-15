import React from 'react'
import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Fotos from './components/Fotos'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fotos' element={<Fotos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
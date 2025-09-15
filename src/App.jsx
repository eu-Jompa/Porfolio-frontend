import { useState } from 'react'
import './App.css'
import Home from './assets/page/Home'

import Sobremim from './Components/Sobremim/Sobremim'
import Portfolio from './Components/Portfolio/Portfolio'
import { Routes, Route } from 'react-router-dom'
import Contato from './Components/Contato/Contato'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<Sobremim/>}/>
        <Route path="projetos" element={<Portfolio/>}/>
        <Route path="contato"element={<Contato />}/>
      </Route>
    </Routes>
    
)}

export default App

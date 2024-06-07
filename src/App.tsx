import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Pages/Header'
import { Login } from './Pages/Login'
import { useState } from 'react'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} >
  
      </Route>
      <Route path="/login" element={<Login />} />

    </Routes>
    </BrowserRouter >
  )
}

export default App

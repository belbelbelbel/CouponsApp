import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Pages/Header'
import { Login } from './Pages/Login'
import { Sidebar } from './Pages/Sidebar'
import { useState } from 'react'
import { Text } from './Pages/Text'

function App() {
  const [show, setshow] = useState(false)
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

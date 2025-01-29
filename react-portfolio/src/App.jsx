import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Homescreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Pages/Home/Navbar'
import MySkills from './Pages/Home/MySkills'

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<div>404 NOT-FOUND</div>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App

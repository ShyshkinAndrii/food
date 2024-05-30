import React from "react"
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Food from './pages/Food'
import Contacts from './pages/Contacts'
import Footer from "./components/Footer"



function App() {


  return (
    <div >
      <div className="max-w-[1640px] mx-auto py-4 px-4 min-h-screen">
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />

      </div>

    </div>

  )
}

export default App

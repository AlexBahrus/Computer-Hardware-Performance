// App.js
import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { HiHome } from 'react-icons/hi'
import { MdGroup } from 'react-icons/md'
import { FaInfoCircle, FaQuestionCircle, FaLightbulb } from "react-icons/fa"; 
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import FAQ from './pages/Faq' 
import Tips from './pages/Tips'
import DetailGPU from './pages/DetailGPU'
import DetailGPUPart from './pages/DetailGPUPart'
import DetailCPU from './pages/DetailCPU'
import DetailCPUPart from './pages/DetailCPUPart'
import DetailRAM from './pages/DetailRAM'
import DetailRAMPart from './pages/DetailRAMPart'
import DetailSSD from './pages/DetailSSD'
import DetailSSDPart from './pages/DetailSSDPart'
import DetailHDD from './pages/DetailHDD'
import DetailHDDPart from './pages/DetailHDDPart'
import DetailUSB from './pages/DetailUSB'
import DetailUSBPart from './pages/DetailUSBPart'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h3 id="titleGroup">Computer Hardware Performance</h3>
        <p>Top Computer Parts</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/CPU" element={<DetailCPU />} />
        <Route path="/home/CPU" element={<DetailCPU />} />
        <Route path="/home/CPU/detail" element={<DetailCPUPart />} />
        <Route path="/CPU/detail" element={<DetailCPUPart />} />
        <Route path="/GPU" element={<DetailGPU />} />
        <Route path="/home/GPU" element={<DetailGPU />} />
        <Route path="/home/GPU/detail" element={<DetailGPUPart />} />
        <Route path="/GPU/detail" element={<DetailGPUPart />} />
        <Route path="/home/RAM" element={<DetailRAM />} />
        <Route path="/RAM" element={<DetailRAM />} />
        <Route path="/home/RAM/detail" element={<DetailRAMPart />} />
        <Route path="/RAM/detail" element={<DetailRAMPart />} />
        <Route path="/SSD" element={<DetailSSD />} />
        <Route path="/home/SSD" element={<DetailSSD />} />
        <Route path="/home/SSD/detail" element={<DetailSSDPart />} />
        <Route path="/SSD/detail" element={<DetailSSDPart />} />
        <Route path="/HDD" element={<DetailHDD />} />
        <Route path="/home/HDD" element={<DetailHDD />} />
        <Route path="/home/HDD/detail" element={<DetailHDDPart />} />
        <Route path="/HDD/detail" element={<DetailHDDPart />} />
        <Route path="/USB" element={<DetailUSB />} />
        <Route path="/home/USB" element={<DetailUSB />} />
        <Route path="/home/USB/detail" element={<DetailUSBPart />} />
        <Route path="/USB/detail" element={<DetailUSBPart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />         
        <Route path="/tips" element={<Tips />} />       
      </Routes>
      <footer>
        <NavLink to="/home" className="iconWrapper">
          <HiHome className="icon" />
          Home
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" />
          Profile
        </NavLink>
        <NavLink to="/faq" className="iconWrapper">
          <FaQuestionCircle className="icon" />
          FAQ
        </NavLink>
        <NavLink to="/tips" className="iconWrapper">
          <FaLightbulb className="icon" />
          Tips & Tricks
        </NavLink>
        <NavLink to="/about" className="iconWrapper">
          <FaInfoCircle className="icon" />
          About
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App

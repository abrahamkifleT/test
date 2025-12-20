import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Analytics from './components/Analytics'
import './index.css'
import Newsletter from './components/Newsletter'
function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  )
}

export default App

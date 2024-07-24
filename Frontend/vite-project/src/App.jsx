import { useState } from 'react'
import './App.css'

// cpmponents
import Navbar from '../components/Navbar/Navbar'
import About from '../components/About/About'
import Secondpage from '../components/Secondpage/Finalepage/Finalepage'
import Thirdpage from '../components/Thirdpage/Finalepage/Finalepage'
import Contactus from '../components/Contactus/Contactus'

function App() {

  return (
    <>
     <Navbar />
     <About />
     <Secondpage />
     <Thirdpage />
     <Contactus/>
    </>
  )
}

export default App

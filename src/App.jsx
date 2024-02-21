import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

const App = () => {
  
  const [sidebar,setSidebar] = useState(true)

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />}/>
        <Route path ='/video/:CategotyId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App

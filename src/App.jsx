import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Splash1 from './pages/splash1';
import Splash2 from './pages/splash2';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Splash1 />} />
          <Route path="/splash2" element={<Splash2 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

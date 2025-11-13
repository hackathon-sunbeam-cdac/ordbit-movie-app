import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/landingPage/LandingPage';
import Login from './Pages/loginpage/login';
import Signup from './Pages/signuppage/signup';

function App() {
  

  return (
  <BrowserRouter>
    {/* <LandingPage/> */}
      <Routes>
        
        <Route path = "/"  element = {<LandingPage/>} />
        <Route path ="/login" element={<Login/>} />
        <Route path = "/signup" element={<Signup/>} />
      </Routes>
  </BrowserRouter>
  )
}

export default App

import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Login from './components/Login';
import { Route , Router , Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App

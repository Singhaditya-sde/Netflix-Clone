import React from 'react'
import HomeScreen from './pages/HomeScreen'
import Login from './components/Login';
import { Route , Router , Routes } from "react-router-dom";
import MainBrowse from './components/MainBrowse';
import SignupPage from './components/SignupPage';
import SubscribePage from './components/SubscribePage';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <>
      <div>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/subscribe" element={<SubscribePage />}/>

            <Route 
              path="/browse"
              element={
                <ProtectedRoute>
                  <MainBrowse />
                </ProtectedRoute>
              }
            />
        </Routes>
      </div>
    </>
  )
}

export default App

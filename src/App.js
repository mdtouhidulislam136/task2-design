import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './App.css';


function App() {
  return (

    
    <Router className="main-page">
    <Navbar />
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path='/Profile' element={<Profile/>} />
    </Routes>
  </Router>
  );
}

export default App;



import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminLogin from './Pages/AdminLogin/AdminLogin';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/admin-login' element={<AdminLogin />} /> 
      </Routes>
    </Router>
  )
}

const App = () => {
  return (
    <Routing />
  );
}

export default App;

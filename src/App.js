import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminLoginPage from './Pages/AdminLoginPage/AdminLoginPage';
import CarouselPage from './Pages/CarouselPage/CarouselPage';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import EditItemPage from './Pages/EditItemPage/EditItemPage';
import EditMenuPage from './Pages/EditMenuPage/EditMenuPage';
import AddItemPage from './Pages/AddItemPage/AddItemPage';

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/admin-login' element={<AdminLoginPage />} /> 
        <Route exact path='/category' element={<CategoryPage />} />
        <Route exact path='/home' element={<CarouselPage />} />
        <Route exact path='/menu' element={<MenuPage />} />
        <Route exact path='/edit-item' element={<EditItemPage />} />
        <Route exact path='/edit-menu' element={<EditMenuPage />} />
        <Route exact path='/add-item' element={<AddItemPage />} /> 
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

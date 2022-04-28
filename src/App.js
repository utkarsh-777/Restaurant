import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import AdminLoginPage from './Pages/Admin/AdminLoginPage/AdminLoginPage';
import CarouselPage from './Pages/Customer/CarouselPage/CarouselPage';
import CategoryPage from './Pages/Customer/CategoryPage/CategoryPage';
import MenuPage from './Pages/Customer/MenuPage/MenuPage';
import EditItemPage from './Pages/Admin/EditItemPage/EditItemPage';
import EditMenuPage from './Pages/Admin/EditMenuPage/EditMenuPage';
import AddItemPage from './Pages/Admin/AddItemPage/AddItemPage';
import AddCategoryPage from './Pages/Admin/AddCategoryPage/AddCategory';
import EditCategoryPage from './Pages/Admin/EditCategoryPage/EditCategory';

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
        {/*Edit Menu page not connected*/}
        <Route exact path='/edit-menu' element={<EditMenuPage />} />
        {/*******************************************************************/}
        <Route exact path='/add-item' element={<AddItemPage />} /> 
        <Route exact path='/add-category' element={<AddCategoryPage />} />
        <Route exact path='/edit-category' element={<EditCategoryPage />} />
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

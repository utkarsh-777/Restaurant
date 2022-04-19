import React, { useEffect } from "react";
import View from "../../components/View/View";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if(!token) {
      navigate('/home')
    }
  }, [])
  return (
    <div>
      <div style={{ backgroundColor: "black", minHeight:'100vh' }}>
        <Header />
        <h1 id="cat">Categories</h1>
        <View />
      </div>
      <Footer />
    </div>
  );
};

export default Category;

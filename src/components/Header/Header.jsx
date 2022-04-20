import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="header">
        <a href="/">Lemon</a>
        {localStorage.getItem("token") && (
          <div className="row container">
            <button
              className="btn btn-lg btn-outline-primary col-sm m-2"
              onClick={() => navigate('/home')}
            >
              Home
            </button>
            <button
              className="btn btn-lg btn-outline-warning col-sm m-2"
              onClick={() => navigate('/category')}
            >
              Category
            </button>
            <button
              className="btn btn-lg btn-outline-success col-sm m-2"
              onClick={() => navigate('/add-item')}
            >
              Add Item
            </button>
            <button
              className="btn btn-lg btn-outline-danger col-sm m-2"
              onClick={logout}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

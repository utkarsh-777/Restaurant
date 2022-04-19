import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/')
    }
  return (
    <>
      <div className="header">
        <a href="/">Lemon</a>
        {localStorage.getItem("token") && (
          <button
            style={{ float: "right", top: "3rem", right: "2rem" }}
            className="btn btn-lg btn-outline-danger"
            onClick={logout}
          >
            logout
          </button>
        )}
      </div>
    </>
  );
};

export default Header;

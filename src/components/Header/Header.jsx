import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBackward } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <div className="header row">
        <a href="/" className="col-9" style={{ fontFamily: "Lobster,cursive", fontSize: "60px" }}>
          Lemon
        </a>
        {localStorage.getItem("token") ? (
          <nav class="navbar navbar-light">
            <form class="container-fluid justify-content-start">
              <button
                className="btn btn-lg btn-light col-sm m-2"
                onClick={() => navigate("/home")}
              >
                Home
              </button>
              <button
                className="btn btn-lg btn-light col-sm m-2"
                onClick={() => navigate("/category")}
              >
                Category
              </button>
              <button
                className="btn btn-lg btn-light col-sm m-2"
                onClick={() => navigate("/add-item")}
              >
                Add Item
              </button>
              <button
                className="btn btn-lg btn-light col-sm m-2"
                onClick={logout}
              >
                logout
              </button>
            </form>
          </nav>
        ) : (
          <div className="col-2">
            {window.location.href.split("/").reverse()[0] === "menu" && (
              <div style={{marginTop:'3rem',float:'right'}}>
                <button onClick={() => navigate('/home')} style={{backgroundColor:'white'}} className="btn btn-lg"><FaBackward /> Back</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

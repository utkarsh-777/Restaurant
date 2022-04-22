import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      return alert("Enter all fields!");
    }

    Axios.post(`/auth/login`, {
      username,
      password,
    }).then((res) => {
      if(res.data.error) {
        return alert(res.data.error)
      }
      localStorage.setItem("token", res.data.token);
      navigate("/home");
    });
  };

  return (
    <div>
      <section className="section-book" style={{ height: "100vh" }}>
        <h1 className="heading-name" style={{fontFamily:"Lobster,cursive",fontSize:"60px"}}>Lemon</h1>
        <div className="container mt-4">
          <div className="book">
            <div className="book__form">
              <div className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Admin Login</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                  <label for="name" className="form__label">
                    Username
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    className="form__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder="********"
                    required
                  />
                  <label for="password" className="form__label">
                    Password
                  </label>
                </div>
                <div className="form__group u-margin-bottom-medium" style={{paddingTop:"20px"}}>
                  <button onClick={handleLogin} className="btn btn-dark btn-lg">
                    Login &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLoginPage;

import React from "react";

const AdminLoginPage = () => {
  return (
    <div>
      <section className="section-book" style={{height:'100vh'}}>
        <h1 className="heading-name">Lemon</h1>
        <div className="container mt-4">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Admin Login</h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    id="name"
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
                    id="password"
                    placeholder="********"
                    required
                  />
                  <label for="password" className="form__label">
                    Password
                  </label>
                </div>
                <div className="form__group u-margin-bottom-medium">
                  <button className="btn btn--green">Next Step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLoginPage;

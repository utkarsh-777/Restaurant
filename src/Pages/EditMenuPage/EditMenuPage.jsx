import React from "react";
import "./EditMenu.css";
import { FaPen, FaTrash } from "react-icons/fa"

const EditMenuPage = () => {
  return (
    <div style={{backgroundColor:'black', color: 'white', marginTop:'-2rem'}}>
      <div>
        <header>Lemon</header>
        <hr />
        <section className="editMenuBackground content" style={{marginTop: '-1rem'}}>
          <div>
            <h3 className="text-center mb-5" style={{fontSize:'3rem'}} >Edit menue items</h3>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food1</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food2</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food3</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food4</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food1</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food1</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food1</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="card bg-dark mb-3 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Food1</h5>
                    <p className="card-text">Description of food.</p>
                    <h5>Price</h5>
                    <a href="/#" className="btn btn-outline-light">
                       <FaPen /> Edit
                    </a>
                    <a href="/#" className="btn btn-outline-light">
                      <FaTrash /> Remove
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditMenuPage;

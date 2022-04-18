import React from "react";
import "./editItem.css";
import editPage from "../../images/editpage2.jpg";
import { FaThumbsUp } from "react-icons/fa";

const EditItemPage = () => {
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "-2rem" }}
    >
      <header>Lemon</header>
      <hr />
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 content">
            <div>
              <h3 className="text-center">Edit items</h3>
            </div>
            <select
              className="form-select mb-5"
              aria-label="Default select example"
            >
              <option selected>Select Catagory</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="mb-5">
              <select
                className="form-select mb-5"
                aria-label="Default select example"
              >
                <option selected>Select Items</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="mb-5">
              <label for="exampleFormControlTextarea3" className="form-label">
                Price
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea3"
                rows="1"
              ></textarea>
            </div>
            <div className="mb-5">
              <label for="exampleFormControlTextarea4" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea4"
                rows="1"
              ></textarea>
            </div>
            <div className="mb-5">
              <label for="exampleFormControlTextarea5" className="form-label">
                Image
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea5"
                rows="1"
              ></textarea>
            </div>
          </div>
          <div className="col-2">
            <div className="vertical_line text-center">
              <div className="vl_1"></div>
              <div className="vl_2"></div>
              <div className="vl_3"></div>
            </div>
          </div>
          <div className="col-5 text-center">
            <img
              src={editPage}
              alt=""
              className="img-fluid"
              height="500px"
              width="500px"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center">
        <button type="button" className="btn btn-outline-light btn-lg">
          Done <FaThumbsUp />
        </button>
      </div>
    </div>
  );
};

export default EditItemPage;

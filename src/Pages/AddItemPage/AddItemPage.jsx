import React from "react";
import editPage from "../../images/editpage2.jpg";
import "../EditItemPage/editItem.css";
import { FaThumbsUp } from "react-icons/fa";

const AddItemPage = () => {
  return (
    <div style={{ backgroundColor: "black", color: "white", marginTop: "-2rem" }}>
        <header>Lemon</header>
        <hr />
        <div class="container-fluid">
          <div class="row">
            <div class="col-5 content">
              <div>
                <h3 class="text-center">Add new items</h3>
              </div>
              <select
                class="form-select mb-5"
                aria-label="Default select example"
              >
                <option selected>Select Catagory</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <div class="mb-5">
                <label for="exampleFormControlTextarea2" class="form-label">
                  Item name
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea2"
                  rows="1"
                ></textarea>
              </div>
              <div class="mb-5">
                <label for="exampleFormControlTextarea3" class="form-label">
                  Price
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea3"
                  rows="1"
                ></textarea>
              </div>
              <div class="mb-5">
                <label for="exampleFormControlTextarea4" class="form-label">
                  Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea4"
                  rows="1"
                ></textarea>
              </div>
              <div class="mb-5">
                <label for="exampleFormControlTextarea5" class="form-label">
                  Image
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea5"
                  rows="1"
                ></textarea>
              </div>
            </div>
            <div class="col-2">
              <div class="vertical_line text-center">
                <div class="vl_1"></div>
                <div class="vl_2"></div>
                <div class="vl_3"></div>
              </div>
            </div>
            <div class="col-5 text-center">
              <img
                src={editPage}
                alt=""
                class="img-fluid"
                height="500px"
                width="500px"
              />
            </div>
          </div>
        </div>
        <hr />
        <div class="text-center">
          <button type="button" class="btn btn-outline-light btn-lg">
            Done <FaThumbsUp />
          </button>
        </div>
    </div>
  );
};

export default AddItemPage;

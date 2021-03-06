import React, { useState, useEffect } from "react";
import editPage from "../../../images/editpage2.jpg";
import "../../../css/style.css";
import { FaThumbsUp, FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from "../../../axios";
import Footer from "../../../components/Footer/Footer";

const AddCategoryPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleAddCategory = () => {
    if (!name || !description || !image) {
      return alert("Enter all fields!");
    }

    Axios.post(
      `/menu/add-category`,
      {
        categoryType: name,
        categoryDescription: description,
        categoryPhoto: image,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((res) => {
      console.log(res.data);
      if (res.data.category) {
        setTimeout(() => {
          navigate("/category");
        }, 1000);
        return alert(`${res.data.category.categoryType} added successfully!`);
      }
      return alert("error");
    });
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      return navigate("/home");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "-2rem" }}
    >
      <div style={{ fontSize: "20px" }}>
        <header style={{ fontFamily: "Lobster,cursive", fontSize: "60px" }}>
          Lemon
        </header>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-5 content">
              <div>
                <h3 className="text-center" style={{ fontSize: "30px" }}>
                  Add Category
                </h3>
              </div>

              <div className="mb-5">
                <label for="exampleFormControlTextarea4" className="form-label">
                  Name
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  rows="1"
                ></textarea>
              </div>

              <div className="mb-5">
                <label for="exampleFormControlTextarea4" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="exampleFormControlTextarea4"
                  rows="1"
                ></textarea>
              </div>
              <div className="mb-5">
                <label for="exampleFormControlTextarea5" className="form-label">
                  Category Image
                </label>
                <textarea
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="form-control"
                  id="exampleFormControlTextarea5"
                  rows="1"
                ></textarea>
              </div>
              <div className="text-center" style={{ paddingTop: "50px" }}>
                <button
                  onClick={handleAddCategory}
                  type="button"
                  className="btn btn-outline-light btn-lg"
                  style={{ float: "left" }}
                >
                  Done <FaThumbsUp />
                </button>
              </div>
              <div style={{ paddingLeft: "90px" }}>
                <button
                  onClick={() => navigate("/category")}
                  type="button"
                  className="btn btn-danger btn-lg"
                >
                  Back <FaBackward />
                </button>
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
                width="400px"
              />
            </div>
          </div>
          <div style={{height:'2rem'}}></div>
        </div>
        <hr />
      </div>
      <div style={{marginTop:'-1rem'}}>
        <Footer />
      </div>
    </div>
  );
};

export default AddCategoryPage;

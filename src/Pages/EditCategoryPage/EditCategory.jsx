import React, { useState, useEffect } from "react";
import editPage from "../../images/editpage2.jpg";
import "../EditItemPage/editItem.css";
import { FaThumbsUp, FaTrashAlt, FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios";
import Footer from "../../components/Footer/Footer";

const EditCategoryPage = () => {
  const token = localStorage.getItem("token");
  const category = JSON.parse(localStorage.getItem("category"));
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleDeleteCategory = () => {
    //   console.log('delete')
    try {
      Axios.delete(`/menu/remove-category/${category._id}`, {
        headers: {
          Authorization: token,
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setTimeout(() => {
            navigate("/category");
          }, 1000);
          return alert(res.data.message);
        }
      });
    } catch (error) {
      console.log(error);
      alert("error");
    }
  };

  const handleEditCategory = () => {
    if (!name || !description || !image) {
      return alert("Enter all fields!");
    }

    Axios.patch(
      `/menu/edit-category/${category._id}`,
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
    )
      .then((res) => {
        console.log(res.data);
        if (res.data.message) {
          setTimeout(() => {
            navigate("/category");
          }, 1000);
          return alert(`${res.data.message}`);
        }
        return alert("error");
      })
      .catch((err) => {
        alert("error!");
        console.log(err);
      });
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      return navigate("/home");
    }
    if (!category) {
      return navigate("/category");
    }
    setName(category.categoryType);
    setDescription(category.categoryDescription);
    setImage(category.categoryPhoto);
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
                  Edit Category
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
              <div className="row" style={{ paddingTop: "50px" }}>
                <div className="col-2">
                  <button
                    onClick={handleEditCategory}
                    type="button"
                    className="btn btn-outline-light btn-lg"
                  >
                    Done <FaThumbsUp />
                  </button>
                </div>
                <div className="col-2">
                  <button
                    onClick={() => navigate("/category")}
                    type="button"
                    className="btn btn-outline-warning btn-lg"
                  >
                    Back <FaBackward />
                  </button>
                </div>
                <div className="col-8">
                  <button
                    style={{ float: "right" }}
                    onClick={handleDeleteCategory}
                    type="button"
                    className="btn btn-outline-danger btn-lg"
                  >
                    Remove Category <FaTrashAlt />
                  </button>
                </div>
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
        <div style={{ marginTop: "-1rem" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default EditCategoryPage;

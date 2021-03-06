import React, { useEffect, useState } from "react";
import "../../../css/style.css";
import editPage from "../../../images/editpage2.jpg";
import { FaThumbsUp, FaTrashAlt, FaBackward } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from "../../../axios";
import Footer from "../../../components/Footer/Footer";

const EditItemPage = () => {
  const token = localStorage.getItem("token");
  const item = JSON.parse(localStorage.getItem("item"));
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState(item ? item.name : "");
  const [category, setCategory] = useState(item ? item.category : "");
  const [price, setPrice] = useState(item ? item.price : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [image, setImage] = useState(item ? item.photo : "");

  const handleDeleteItem = () => {
    try {
      Axios.delete(`/menu/remove-item/${item._id}`, {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data);
          setTimeout(() => {
            navigate("/menu");
          }, 1000);
          return alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
          return alert(err);
        });
    } catch (error) {
      console.log(error);
      return alert("error!");
    }
  };

  const handleEdit = () => {
    if (!name || !category || !price || !description || !image) {
      return alert("Enter all fields!");
    }
    console.log(category);
    Axios.patch(
      `/menu/edit-item/${item._id}`,
      {
        name,
        price,
        category: JSON.stringify(category),
        description,
        photo: image,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    ).then((res) => {
      console.log(res.data);
      if (res.data.message) {
        return alert(res.data.message);
      }
      return alert("error");
    });
  };

  useEffect(() => {
    if (!token || !item) {
      localStorage.clear();
      return navigate("/home");
    }

    Axios.get("/menu/get-all-categories").then((res) => {
      setCategories(res.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "-2rem" }}
    >
      <div style={{ fontSize: "20px" }}>
        <header className="head-eip" style={{ fontFamily: "Lobster,cursive", fontSize: "60px" }}>
          Lemon
        </header>
        <hr />
        <div className="container-fluid">
          <div className="row">
            <div className="col-5 content-eip">
              <div>
                <h3 className="text-center" style={{ fontSize: "30px" }}>
                  Edit items
                </h3>
              </div>
              {categories && categories.length > 0 && (
                <select
                  className="form-select mb-5"
                  aria-label="Default select example"
                  onChange={(e) =>
                    setCategory({
                      id: JSON.parse(e.target.value)._id,
                      name: JSON.parse(e.target.value).categoryType,
                    })
                  }
                >
                  {categories.map((category) => (
                    <option
                      selected={category._id === item.category.id}
                      value={JSON.stringify(category)}
                    >
                      {category.categoryType}
                    </option>
                  ))}
                </select>
              )}

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
                <label for="exampleFormControlTextarea3" className="form-label">
                  Price
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  Image
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
                    onClick={handleEdit}
                    type="button"
                    className="btn btn-outline-light btn-lg" 
                    style={{marginBottom: "20px", borderRadius: "50px"}}
                  >
                    Done <FaThumbsUp />
                  </button>
                </div>
                <div className="col-2">
                  <button
                    onClick={() => navigate("/menu")}
                    type="button"
                    className="btn btn-outline-warning btn-lg" 
                    style={{marginBottom: "20px", borderRadius: "50px"}}
                  >
                    Back <FaBackward />
                  </button>
                </div>
                <div className="col-8">
                  <button
                    style={{ float: "right", marginBottom: "20px", borderRadius: "50px"}}
                    onClick={handleDeleteItem}
                    type="button"
                    className="btn btn-outline-danger btn-lg" 
                  >
                    Remove Item <FaTrashAlt />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="vertical_line-eip text-center">
                <div className="vl_1-eip"></div>
                <div className="vl_2-eip"></div>
                <div className="vl_3-eip"></div>
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
        </div>
        <hr />
      </div>
      <div style={{ marginTop: "-1rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default EditItemPage;

import React, { useState, useEffect } from "react";
import editPage from "../../images/editpage2.jpg";
import "../EditItemPage/editItem.css";
import { FaThumbsUp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios";

const AddItemPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleEdit = () => {
    if (!name || !category || !price || !description || !image) {
      return alert("Enter all fields!");
    }
    console.log(category);
    Axios.post(
      `/menu/add-item/${category.id}`,
      {
        name,
        price,
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
        setTimeout(() => {
          navigate("/home");
        }, 1000);
        return alert(res.data.message);
      }
      return alert("error");
    });
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      return navigate("/home");
    }

    Axios.get("/menu/get-all-categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
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
              <h3 className="text-center">Add items</h3>
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
                  <option key={category._id} value={JSON.stringify(category)}>
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
        <button
          onClick={handleEdit}
          type="button"
          className="btn btn-outline-light btn-lg"
        >
          Done <FaThumbsUp />
        </button>
      </div>
    </div>
  );
};

export default AddItemPage;
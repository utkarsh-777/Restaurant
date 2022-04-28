import React, { useEffect, useState } from "react";
import "../../../css/style.css";
import { FaPen, FaTrash } from "react-icons/fa";
import Axios from "../../../axios";
import { useNavigate } from "react-router-dom";

const EditMenuPage = () => {
  const token = localStorage.getItem("token");
  const [menuItems, setMenuItems] = useState([]);
  const navigate = useNavigate();

  const handleEditItem = (item) => {
    localStorage.setItem("item", JSON.stringify(item));
    navigate("/edit-item");
  };

  const getData = () => {
    return Axios.get(`/menu/get-all-items`)
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemoveItem = (item) => {
    try {
      Axios.delete(`/menu/remove-item/${item._id}`, {
        headers: {
          Authorization: token,
        },
      }).then((res) => {
        alert(res.data.message);
        getData();
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!token) {
      localStorage.clear();
      return navigate("/home");
    }
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{ backgroundColor: "black", color: "white", marginTop: "-2rem" }}
    >
      <div>
        <header className="head-emp" style={{fontFamily:"Lobster,cursive",fontSize:"60px"}}>Lemon</header>
        <hr />
        <section
          className="editMenuBackground-emp content"
          style={{ marginTop: "-1rem" }}
        >
          <div>
            <h3 className="text-center mb-5" style={{fontSize:"30px"}}>
              Edit menu items
            </h3>
          </div>
          <div className="container-fluid">
            <div className="row">
              {menuItems.length > 0 &&
                menuItems.map((item) => (
                  <div className="col-sm-3">
                    <div className="card bg-dark mb-3 text-center">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">{item.category.name}</p>
                        <h5>{`£ ${item.price}`}</h5>
                        <button
                          onClick={() => handleEditItem(item)}
                          className="btn btn-lg btn-outline-light m-2"
                        >
                          <FaPen /> Edit
                        </button>
                        <button 
                          onClick={() => handleRemoveItem(item)}
                          className="btn btn-lg btn-danger m-2 remove_button"
                        >
                          <FaTrash /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditMenuPage;

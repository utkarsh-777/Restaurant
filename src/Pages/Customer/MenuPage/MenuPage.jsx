import React, { useEffect, useState } from "react";
import CardComp from "../../../components/MenuCard/MenuCard";
import { Container } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import Axios from "../../../axios";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const category = JSON.parse(localStorage.getItem("category"));
  const [categoryItems, setCategoryItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!category) {
      return navigate("/home");
    }
    Axios.get(`/menu/get-category-items/${category._id}`).then((res) => {
      console.log(res.data);
      setCategoryItems(res.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <div style={{ backgroundColor: "black", minHeight:'80vh' }}>
          <Header />
          <br></br>
          <br></br>
          <Container>
            <div className="row">
              {categoryItems.length > 0 ? (
                <>
                  {categoryItems.map((item) => (
                    <div className="col-3 mt-5 text-center">
                      <CardComp
                        text={`£ ${item.price}`}
                        title={item.name}
                        link={item.photo}
                        item={item}
                      />
                    </div>
                  ))}
                </>
              ) : (
                <span style={{ color: "white", textAlign:'center',fontSize:'3rem' }}>NO ITEMS</span>
              )}
            </div>
          </Container>
        </div>
        <div style={{height:'12rem',backgroundColor:'black'}}></div>
        <Footer />
      </div>
    </>
  );
};

export default MenuPage;

import React, { useEffect, useState } from "react";
import CardComp from "../../components/MenuCard/MenuCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Axios from "../../axios";

const MenuPage = () => {
  const category = JSON.parse(localStorage.getItem("category"));
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    Axios.get(`/menu/get-category-items/${category._id}`).then((res) => {
      console.log(res.data);
      setCategoryItems(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <div style={{ backgroundColor: "black" }}>
          <Header />
          <br></br>
          <br></br>
          <Container>
            <Row>
              {categoryItems.length > 0 ? (
                <>
                  {categoryItems.map((item) => (
                    <Col style={{margin:'1rem'}} xs={3}>
                      <CardComp
                        text={`£ ${item.price}`}
                        title={item.name}
                        link={item.photo}
                        item={item}
                      />
                    </Col>
                  ))}
                </>
              ): <span style={{color:'white'}}>NO ITEMS</span>}
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MenuPage;

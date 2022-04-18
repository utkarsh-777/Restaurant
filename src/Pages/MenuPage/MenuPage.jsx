import React from "react";
import CardComp from "../../components/MenuCard/MenuCard";
import { Container, Row, Col } from "react-bootstrap";
import burger1 from "./angus1.png";
import burger2 from "./ccb.jpg";
import burger3 from "./sccb.jpg";
import burger4 from "./ppgcb.gif";
import burger5 from "./bg2.jpg";
import burger6 from "./gabb.avif";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MenuPage = () => {
  return (
    <>
      <div>
        <div style={{backgroundColor:'black'}}>
          <Header />
          <br></br>
          <br></br>
          <Container>
            <Row>
              <Col>
                <CardComp
                  text="£7.49"
                  title="Angus Beef Burger"
                  link={burger1}
                />
              </Col>
              <Col>
                <CardComp
                  id="name"
                  text="£5.59"
                  title="Crispy Chicken Burger"
                  link={burger2}
                />{" "}
              </Col>
              <Col>
                <CardComp
                  text="£5.89"
                  title="Spicy Crispy Chicken Burger"
                  link={burger3}
                />
              </Col>
            </Row>
            <br></br>
            <Row>
              <Col>
                <CardComp
                  text="£8.49"
                  title="Grilled Peri Peri Burger"
                  link={burger4}
                />
              </Col>
              <Col>
                <CardComp
                  text="£11.30"
                  title="Golden Crispy Chicken Burger"
                  link={burger5}
                />
              </Col>
              <Col>
                <CardComp
                  text="£6.89"
                  title="Golden Angus Beef Burger"
                  link={burger6}
                />
              </Col>
            </Row>
            <br></br>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MenuPage;

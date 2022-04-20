import Header from "../../components/Header/Header";
import { Col, Container } from "react-bootstrap";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import Axios from "../../axios";

const CarouselPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Axios.get("/menu/get-all-categories").then((res) => {
      console.log(res.data);
      setCategories(res.data);
    });
  }, []);
  return (
    <div style={{ backgroundColor: "black" }}>
      <Header />
      <Container style={{ paddingBottom: "5rem" }}>
        <CarouselComp categories={categories.length > 0 && categories} />
        {/* <div className="horizontal-scroll scrollbar scrollbar-juicy-peach"> */}
        <div>
          {categories && categories.length > 0 && (
            <>
              {categories.map((category) => (
                <Col className="col-xs-4">
                  {" "}
                  <CarouselCard
                    image={category.categoryPhoto}
                    title={category.categoryType}
                    category={category}
                  />
                </Col>
              ))}
            </>
          )}
        </div>
      </Container>
      <div style={{ marginTop: "-2.5rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default CarouselPage;

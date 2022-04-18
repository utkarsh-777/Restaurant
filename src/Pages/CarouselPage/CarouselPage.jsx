import Header from "../../components/Header/Header";
import { Col, Container } from "react-bootstrap";
import CarouselComp from "../../components/CarouselComp/CarouselComp";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import Footer from "../../components/Footer/Footer";
import cardCar from "./cardCar.jpg";
import bg from "./bg.jpg";

const CarouselPage = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
      <Header />
      <Container style={{paddingBottom:'5rem'}}>
        <CarouselComp />
        <div className="horizontal-scroll scrollbar scrollbar-juicy-peach">
          <Col className="col-xs-4">
            {" "}
            <CarouselCard image={cardCar} title="Starters" />
          </Col>
          <Col className="col-xs-4">
            {" "}
            <CarouselCard image={bg} title="Mains" />
          </Col>
          <Col className="col-xs-4">
            {" "}
            <CarouselCard image={cardCar} title="Sauces" />
          </Col>
          <Col className="col-xs-4">
            {" "}
            <CarouselCard image={bg} title="Burgers and wraps" />
          </Col>
          <Col className="col-xs-4">
            {" "}
            <CarouselCard image={cardCar} title="Grills" />
          </Col>
          <Col className="col-xs-4">
            <CarouselCard image={bg} title="Dessert" />
          </Col>
        </div>
      </Container>
      <div style={{marginTop:'-2.5rem'}}>
        <Footer />
      </div>
    </div>
  );
};

export default CarouselPage;

import CatCard from "./CatCard";
import "./view.css";
import img from "./img.jpg";
import { Container, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const View = () => {
  return (
    <>
      <Container fluid id="cont">
        <div>
          <Col className="col-xs-4">
            <CatCard img={img} title="Starters" />
          </Col>
          <Col className="col-xs-4">
            <CatCard img={img} title="Mains" />
          </Col>
          <Col className="col-xs-4">
            <CatCard img={img} title="Sauces" />
          </Col>
        </div>
        <div id="more">
          <Col className="col-xs-4">
            <CatCard img={img} title="Burgers and Wraps" />
          </Col>
          <Col className="col-xs-4">
            <CatCard img={img} title="Grills" />
          </Col>
          <Col className="col-xs-4">
            <Button className="add">{<FaPlus size="3rem" />}</Button>
          </Col>
        </div>
        <span id="dots"></span>

        <div>
          <Button onClick={toggle} id="myBtn" variant="outline-dark">
            {" "}
            View more
          </Button>
        </div>
      </Container>
    </>
  );
};

function toggle() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less";
    moreText.style.display = "inline";
  }
}

export default View;

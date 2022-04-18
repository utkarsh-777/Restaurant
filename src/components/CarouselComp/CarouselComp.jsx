import { Carousel } from "react-bootstrap";
import "./carousel.css";
import berry from "./berry.webp";
import sp1 from "./sp1.webp";
import sp2 from "./sp2.webp";

export default function CarouselComp(props) {
  return (
    <Carousel id="cars">
      <Carousel.Item interval={2500}>
        <img className="image" src={sp1} alt="First slide" />
        <Carousel.Caption>
          <h3>Always Fresh</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="image" src={berry} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="image" src={sp2} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

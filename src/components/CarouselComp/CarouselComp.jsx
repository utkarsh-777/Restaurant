import { Carousel } from "react-bootstrap";
import "./carousel.css";

export default function CarouselComp(props) {
  return (
    <Carousel id="cars">
      {props.categories &&
        props.categories.map((category) => (
          <Carousel.Item key={category._id} interval={2500}>
            <img
              className="image"
              src={category.categoryPhoto}
              alt="First slide"
            />  
          </Carousel.Item>
          
        ))}
    </Carousel>
  );
}

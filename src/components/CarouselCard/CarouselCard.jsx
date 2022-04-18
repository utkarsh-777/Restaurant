import { Card, Button } from "react-bootstrap";

import "./carouselCard.css";

export default function CarouselCard(props) {
  return (
    <Card id="cardCar" style={{ width: "18rem", backgroundColor:'black', border:'1px solid white' }}>
      <Card.Img className="image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button variant="outline-dark">Explore</Button>
      </Card.Body>
    </Card>
  );
}

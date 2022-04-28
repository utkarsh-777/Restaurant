import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./carouselCard.css";

export default function CarouselCard(props) {
  const navigate = useNavigate();
  const handleGetCategory = (category) => {
    localStorage.setItem("category", JSON.stringify(category));
    navigate("/menu");
  };
  return (
    <Card
      key={props.category._id}
      id="cardCar"
      style={{
        width: "35rem",
        height: "40rem",
        backgroundColor: "black",
        border: "5px solid white",
      }}
    >
      <Card.Img className="image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button
          variant="outline-dark"
          onClick={() => handleGetCategory(props.category)}
        >
          Explore
        </Button>
      </Card.Body>
    </Card>
  );
}

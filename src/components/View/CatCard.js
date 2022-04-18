import "./CatCard.css";
import { Card, Button } from "react-bootstrap";

var CatCard = (props) => {
  return (
    <Card id="myCard" style={{ width: "18rem" }}>
      <Card.Img className="image" variant="top" src={props.img} />
      <Card.Body className="carBody">
        <Card.Title className="title">{props.title}</Card.Title>
        <Button className="bton" variant="outline-dark">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CatCard;

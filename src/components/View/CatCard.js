import "./CatCard.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

var CatCard = (props) => {
  const navigate = useNavigate();

  const editCategory = () => {
    localStorage.setItem("category",JSON.stringify(props.category));
    navigate('/edit-category')
  }

  return (
    <Card id="myCard" style={{ width: "18rem" }}>
      <Card.Img className="image" variant="top" src={props.img} />
      <Card.Body className="carBody">
        <Card.Title className="title">{props.title}</Card.Title>
        <Button onClick={editCategory} className="bton" variant="outline-dark">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CatCard;

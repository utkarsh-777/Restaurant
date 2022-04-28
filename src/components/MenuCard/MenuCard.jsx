import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./MenuCard.css";

export default function CardComp(props) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleEditItem = () => {
    localStorage.setItem("item", JSON.stringify(props.item));
    navigate("/edit-item");
  };
  return (
    <div id="menuCard" style={{ textAlign: "center" }}>
      <Card
        className="col-lg-4 card"
        style={{ width: "25rem", border: "3px solid yellow" }}
      >
        <Card.Img className="image" src={props.link} variant="top" />
        <Card.Body>
          <Card.Title className="cardBody">{props.title}</Card.Title>
          <Card.Text className="text">{props.text}</Card.Text>
          {token && (
            <Button
              className="button"
              variant="outline-dark"
              onClick={handleEditItem}
            >
              EDIT
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

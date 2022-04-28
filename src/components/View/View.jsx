import CatCard from "./CatCard";
import "./View.css";
import { Container, Col, Button, Row } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import Axios from "../../axios";
import { useNavigate } from "react-router-dom";

const View = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleAddCategory = () => {
    navigate('/add-category')
  }

  useEffect(() => {
    try {
      Axios.get("/menu/get-all-categories").then((res) => {
        setCategories(res.data);
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, []);
  return (
    <>
      <Container fluid id="cont">
        <Row>
          {categories.length > 0 &&
            categories.map((category) => (
              <Col xs={4} className="mb-3">
                <CatCard
                  img={category.categoryPhoto}
                  title={category.categoryType}
                  category={category}
                />
              </Col>
            ))}
          <Col className="col-xs-4">
            <Button onClick={handleAddCategory} className="add">{<FaPlus size="3rem" />}</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

// function toggle() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "View more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "View less";
//     moreText.style.display = "inline";
//   }
// }

export default View;
